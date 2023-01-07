const prettier = require('prettier');
const prettierConfig = require('../config/prettier');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const kebabCase = require('lodash/kebabCase');
const { FRAMEWORK_MAP } = require('../config');
const { parseJSON } = require('./utils');
const { getImportsConfig, getImportsCode } = require('./generate-import');
const { generateClassNameUnitCase } = require('./generate-class-name');
const { generateTNodeElement } = require('./generate-tnode');
const { generateAttributeUnitCase } = require('./generate-attribute');
const { generateDomUnitCase } = require('./generate-dom');
const { generateEventUnitCase } = require('./generate-event');
const { NEED_USE_DEFAULT_OR_USE_VMODEL } = require('./const/vue2-use-default');
const { copyUnitTestsToOtherWrapper } = require('./copy');

const generateFunctionsMap = {
  // 元素类名测试
  className: generateClassNameUnitCase,
  // 元素属性测试
  attribute: generateAttributeUnitCase,
  // 检测 DOM 元素是否存在
  dom: generateDomUnitCase,
  // TNode 测试
  tnode: generateTNodeElement,
  // 事件
  event: generateEventUnitCase,
};

function generateVitestUnitCase(baseData, framework, { component }) {
  let tests = [];
  const configFlag = {
    hasEvent: false,
    importedComponents: [],
    importedMounts: new Set(),
    needDefaultRender: false,
  };
  Object.entries(baseData).forEach(([component, oneComponentApi]) => {
    if (!oneComponentApi) return;
    let oneComponentTests = [];
    oneComponentApi.forEach((oneApiData) => {
      if (!oneApiData.test_description) return;
      const jsonError = `${oneApiData.field_name}: ${oneApiData.test_description} is not a valid JSON.`;
      const testDescription = parseJSON(oneApiData.test_description, jsonError);
      if (!testDescription.PC || framework.indexOf('PC') === -1) return;
      
      // 存在 Web 框架的单测用例，再输出
      // console.log(testDescription.PC);
      let oneApiTestCase = [];
      Object.keys(testDescription.PC).forEach((key) => {
        if (generateFunctionsMap[key]) {
          oneApiTestCase = generateFunctionsMap[key](testDescription.PC, oneApiData, framework, component)
          if (oneApiTestCase && oneApiTestCase.length) {
            oneComponentTests = oneComponentTests.concat([oneApiTestCase.join('\n')]);
            if (key === 'event') {
              configFlag.hasEvent = true;
            }
            // 同样的测试用例复用到其他实例
            if (testDescription.PC.copyTestToWrapper) {
              const { copyCode, wrappers } = copyUnitTestsToOtherWrapper(oneApiTestCase, testDescription.PC, framework);
              if (copyCode) {
                oneComponentTests = oneComponentTests.concat(copyCode);
                wrappers.forEach((wrapper) => {
                  configFlag.importedMounts.add(wrapper);
                });
              }
            }
          }
        }
      });

      if (testDescription.PC.wrapper) {
        configFlag.importedMounts.add(testDescription.PC.wrapper);
      } else {
        configFlag.needDefaultRender = true;
      }
      if (testDescription.Mobile && testDescription.Mobile.wrapper) {
        configFlag.importedMounts.add(testDescription.Mobile.wrapper);
      }
    });

    if (oneComponentTests.length) {
      oneComponentTests.unshift(`describe('${component} Component', () => {`);
      oneComponentTests.push('});\n');
      tests = tests.concat(oneComponentTests);
      configFlag.importedComponents.push(component);
    }
  });

  const importConfig = getImportsConfig(configFlag, tests);
  const importCodes = getImportsCode(importConfig, framework);
  const cases = [importCodes].concat(tests).join('\n\n');

  try {
    // console.log(`>>>>>>>>>>\n${cases}\n>>>>>>>>>`);
    const codeData = prettier.format(cases, prettierConfig);
    const basePath = FRAMEWORK_MAP[framework].apiBasePath;
    const fileName = kebabCase(component);
    const outputFolder = path.resolve(basePath, `${fileName}/__tests__`);
    const outputPath = path.resolve(outputFolder, `vitest-${fileName}.test.jsx`);

    fs.mkdir(outputFolder, { recursive: true }, (err) => {
      if (err) {
        return console.error(err);
      }
      const comment = getFileComment(framework, component);
      fs.writeFile(outputPath,  comment + codeData, (err) => {
        if (err) {
          return console.error(err);
        }
        console.log(chalk.green(`unit test cases file: ${outputPath} has been created.`));
      });
    });

  } catch (e) {
    console.log(chalk.red('格式化失败，请检查生成的文件是否存在语法错误\n'));
    console.warn(e);
  }
}

function getFileComment(framework, component) {
  const useDefault = framework === 'Vue(PC)' && NEED_USE_DEFAULT_OR_USE_VMODEL.includes(component) ? ',useDefault' : '';
  // 因 (h) 的存在，禁用整个文件规则
  const vue2Comment = framework === 'Vue(PC)' ? `/* eslint-disable @typescript-eslint/no-unused-vars */\n` : '';
  const comment = [
    `/**\n * 该文件由脚本自动生成，如需修改请联系 PMC\n * `,
    `This file generated by scripts of tdesign-api. \`npm run api:docs ${component} ${framework} vitest,finalProject${useDefault}\`\n * `,
    'If you need to modify this file, contact PMC first please.\n */\n',
  ].join('');
  return vue2Comment + comment;
}

module.exports = {
  generateVitestUnitCase,
};
