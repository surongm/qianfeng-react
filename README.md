
## npm
 npm 官网 
  https://www.npmjs.com

## VSCode
 使用这个插件 ES7 React/Redux/GraphQL/React-Native snippets
 可使用rcc命令快速创建组件

 ## components目录
  index.js  文件中 
  ①export default  只能导出一个组件

  <!-- 这种方式比较容易记住 -->
  ② import Home from './Home'  （前面的Home不能带{}）
  export {
      Home,
      Detail
  }

  <!-- 推荐这种方式 -->
  ③import Header from './Header'  （前面的Home带不带{}都可）
  export { default as Header } from './Header'
  export { default as Content } from './Content'
  export { default as Footer } from './Footer'

## 空标签
  // 除去多余的div标签
  ① Fragment 是一个react提供的空标签
   import {Fragment } from 'react'
   <Fragment>
   </Fragment>

  ② 或者直接使用 空标签
    <>
    </>

