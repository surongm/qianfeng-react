import React, { Component } from 'react'
import { render } from 'react-dom'

// 这里是使用类的形式创建的组件，是jsx语法，但不是合理的js代码
// class App extends Component {      
//     render(){
//         return (
//             <div className="app" id="approot">
//                 <h1 className="title">类组件</h1>
//                 <p>继承</p>
//             </div>
//         )
//     }
// }

// jsx原理
// 表示一个虚拟DOM树的方式
// const app = {
//     tag: "div",
//     attrs: {
//         className: "app",
//         id: "approot"
//     },
//     children:[
//         {
//             tag: "h1",
//             attrs: {
//                 className: "title"
//             },
//             children: [
//                 "类组件"
//             ]
//         },
//         {
//             tag: "p",
//             attrs: null,
//             children: [
//                 "继承"
//             ]
//         }
//     ]
// }

// 所以react在真正渲染的时候会把上面的类组件代码编辑为下面的代码，下面的代码是合法的js代码
class App extends Component {      
    render(){
        return (
            // js语法  React.createElement是一个方法，用于创建元素  
            // 可以有很多的参数 前两个是固定的 
            // 第一个可以理解为标签名 
            // 第二个可以理解为标签的属性 
            // 剩下的可以继续写更多的子元素
            // React.createElement(type,{props},[...children])
            React.createElement(
                "div",
                {
                    className: "app",
                    id: "approot"
                },
                React.createElement(
                    'h1',
                    {
                        className: "title"
                    },
                    "jsx原理"
                ),
                React.createElement(
                    'p',
                    null,
                    "继承222"
                )
            )
        )
    }
}

render(
    <App />,
    document.querySelector('#root')
)