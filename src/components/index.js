// 第一种方式
// import TodoHeader from './TodoHeader'
// import TodoInput from './TodoInput'
// import TodoList from './TodoList'

// 中间可能会做一些处理再导出

// export {
//     TodoHeader,
//     TodoInput,
//     TodoList
// } 

// 第二种方式
export { default as TodoHeader } from './TodoHeader'
export { default as TodoInput } from './TodoInput'
export { default as TodoList } from './TodoList'
export { default as Like } from './Like'