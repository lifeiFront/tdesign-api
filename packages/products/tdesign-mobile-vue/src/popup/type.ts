/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { OverlayProps } from '../overlay';
import { TNode, AttachNode } from '../common';

export interface TdPopupProps {
  /**
   * 指定挂载节点。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body
   * @default 'body'
   */
  attach?: AttachNode;
  /**
   * 是否展示关闭按钮，值为 `true` 显示默认关闭按钮；值为 `false` 则不显示关闭按钮；也可以自定义关闭按钮
   */
  closeBtn?: boolean | TNode;
  /**
   * 点击遮罩层是否关闭
   * @default true
   */
  closeOnOverlayClick?: boolean;
  /**
   * 是否在关闭浮层时销毁浮层
   * @default false
   */
  destroyOnClose?: boolean;
  /**
   * 动画过渡时间
   * @default 240
   */
  duration?: number;
  /**
   * 遮罩层的属性，透传至 overlay
   * @default {}
   */
  overlayProps?: OverlayProps;
  /**
   * 浮层出现位置
   * @default top
   */
  placement?: 'top' | 'left' | 'right' | 'bottom' | 'center';
  /**
   * 是否阻止背景滚动
   * @default true
   */
  preventScrollThrough?: boolean;
  /**
   * 是否显示遮罩层
   * @default true
   */
  showOverlay?: boolean;
  /**
   * 弹出层内容区的动画名，等价于transition组件的name属性
   * @default ''
   */
  transitionName?: string;
  /**
   * 是否显示浮层
   */
  visible?: boolean;
  /**
   * 是否显示浮层，非受控属性
   */
  defaultVisible?: boolean;
  /**
   * 是否显示浮层
   */
  modelValue?: boolean;
  /**
   * 组件层级，Web 侧样式默认为 5500，移动端和小程序样式默认为 1500
   */
  zIndex?: number;
  /**
   * 组件准备关闭时触发
   */
  onClose?: (context: { e: MouseEvent }) => void;
  /**
   * 组件关闭且动画结束后执行
   */
  onClosed?: () => void;
  /**
   * 组件准备展示时触发
   */
  onOpen?: () => void;
  /**
   * 组件展示且动画结束后执行
   */
  onOpened?: () => void;
  /**
   * 当浮层隐藏或显示时触发
   */
  onVisibleChange?: (visible: boolean, trigger: PopupSource) => void;
}

export type PopupSource = 'close-btn' | 'overlay';
