:: BASE_DOC ::

## API

### Transfer Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | className of component | N
style | Object | - | CSS(Cascading Style Sheets)，Typescript：`React.CSSProperties` | N
checkboxProps | Object | - | Typescript：`CheckboxProps`，[Checkbox API Documents](./checkbox?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/transfer/type.ts) | N
checked | Array | [] | Typescript：`Array<TransferValue>` | N
data | Array | [] | Typescript：`Array<T>` | N
direction | String | both | options: left/right/both | N
disabled | Boolean / Array | - | Typescript：`boolean \| Array<boolean>` | N
empty | TNode | '' | Typescript：`EmptyType \| Array<EmptyType> \| TNode` `type EmptyType = string \| TNode `。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts)。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/transfer/type.ts) | N
footer | TNode | - | Typescript：`Array<string \| TNode> \| TNode<{ type: TransferListType }>`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
keys | Object | - | alias field name in data。Typescript：`KeysType`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
operation | TNode | - | Typescript：`Array<string \| TNode> \| TNode<{ direction: 'left' \| 'right' }>`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
pagination | Object / Array | - | Typescript：`PaginationProps \| Array<PaginationProps>`，[Pagination API Documents](./pagination?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/transfer/type.ts) | N
search | Boolean / Object / Array | false | Typescript：`SearchOption \| Array<SearchOption>` `type SearchOption = boolean \| InputProps`，[Input API Documents](./input?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/transfer/type.ts) | N
showCheckAll | Boolean / Array | true | Typescript：`boolean \| Array<boolean>` | N
targetDraggable | Boolean | false | allowed to sort the target list by dragging | N
targetSort | String | original | options: original/push/unshift | N
title | TNode | [] | Typescript：`Array<TitleType> \| TNode<{ type: TransferListType }>` `type TitleType = string \| TNode` `type TransferListType = 'source' \| 'target'`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts)。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/transfer/type.ts) | N
transferItem | TElement | - | Typescript：`TNode<TransferItem<T>>` `interface TransferItem<T extends DataOption = DataOption> { data: T; index: number; type: TransferListType}`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts)。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/transfer/type.ts) | N
tree | TElement | - | Typescript：`(tree: TreeProps) => TNode`，[Tree API Documents](./tree?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts)。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/transfer/type.ts) | N
value | Array | [] | Typescript：`Array<TransferValue>` | N
defaultValue | Array | [] | uncontrolled property。Typescript：`Array<TransferValue>` | N
onChange | Function |  | Typescript：`(targetValue: Array<TransferValue>, context: TargetParams) => void`<br/>Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts)。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/transfer/type.ts)。<br/>`interface TargetParams { type: TransferListType; movedValue: Array<TransferValue> }`<br/> | N
onCheckedChange | Function |  | Typescript：`(options: CheckedOptions) => void`<br/>Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts)。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/transfer/type.ts)。<br/>`interface CheckedOptions { checked: Array<TransferValue>; sourceChecked: Array<TransferValue>; targetChecked: Array<TransferValue>; type: TransferListType }`<br/> | N
onPageChange | Function |  | Typescript：`(page: PageInfo, context: { type: TransferListType }) => void`<br/> | N
onScroll | Function |  | Typescript：`(options: { e: Event; bottomDistance: number; type: TransferListType }) => void`<br/>Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts) | N
onSearch | Function |  | Typescript：`(options: SearchContext) => void`<br/>Typescript：`TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/common.ts)。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/packages/components/transfer/type.ts)。<br/>`interface SearchContext { query: string; type: TransferListType; trigger: 'input' \| 'enter';  e: InputEvent \| KeyboardEvent }`<br/> | N
