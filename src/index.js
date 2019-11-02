import React from 'react'
import ReactDOM from 'react-dom'

//例一： 最简单的例子
// ReactDOM.render(
//     <h1> Welcome </h1>,
//     document.querySelector('#root')
// )


//例二： 定义一个变量 不用加引号 jsx语法
// const app = <div><h1> Welcome React</h1></div>

// 定义一个方法①
// const app = () => {
//     return <h1> Welcome React</h1>
// }
// ReactDOM.render(
//     app(),
//     document.querySelector('#root')
// )

// 定义一个方法②
// 在jsx里面写js {}
// const createapp = (props) => {
//     return <h1> Welcome React {props.title}</h1>
// }
// const app = createapp({
//     title:"React 16.8"
// })
// ReactDOM.render(
//     app,
//     document.querySelector('#root')
// )


// 例三：多行代码
// const createapp = (props) => {
//     // return  <div>
//     //         <h1> Welcome React {props.title}</h1>
//     //         <h1> Welcome React {props.title}</h1>
//     //     </div>
    
//     return (
//         <div>
//             {/*  在jsx里面写js 需要加{} */}
//             {/* 注释 */}
//             <h1> Welcome React {props.title}</h1>
//             <h1> Welcome React {props.title}</h1>
//         </div>
//     )
// }
// const app = createapp({
//     title:"React 16.8"
// })
// ReactDOM.render(
//     app,
//     document.querySelector('#root')
// )


// 例四：函数式组件
const App = (props) => {
    return (
        <div>
            {/*  在jsx里面写js 需要加{} */}
            {/* 注释 */}
            <h1> Welcome React {props.title}</h1>
            <h1> Welcome React {props.title}</h1>
        </div>
    )
}
ReactDOM.render(
    <App title="surongmin"/>,
    document.querySelector('#root')
)