import React, { Component } from 'react'
import { render } from 'react-dom'

// 定义组件的第二种方式 类组件 使用类继承React.Component/Component
class App extends Component {      
    render(){
        console.log(this.props);
        return (
            <div>
                <h1>类组件</h1>
                <p>{this.props.title}</p>
            </div>
        )
    }
}

// 类组件渲染的原理
// const app = new App({
//     title:"继承"
// }).render()

// render是react dom的一个方法， 这个方法一般只会调用一次 其他都可以是他的子组件
render(
    <App  title="继承"/>,
    // app,
    document.querySelector('#root')
)