import React, { Component } from 'react'
import { render } from 'react-dom'
import classNames from 'classnames'
import styled from 'styled-components'
import './index.css'

console.log(styled)

class App extends Component {      
    render(){
        const style = {color:'green'}
        const Title = styled.h1`
            color: yellow;
            text-align:center
        `
        return (
            <div>
                {/* 第一个花括号是代表要写js语法 第二个花括号是指里面是一个对象 */}
                <h1 style={{color:'red'}}>类组件</h1>
                <ol>
                    {/* 第一种样式 内联样式 */}
                    <li style={style}>第二种方式 内联样式 类组件</li>
                    {/* 第二种使用class  需要写成className */}
                    <li className="text-color">第二种方式 外部样式 类组件</li>
                    {/* 第三种方式 动态创建不同的className */}
                    <li className={classNames('a',{'b':true,'c':false})}>
                        第三种方式 动态创建不同的className 使用classnames
                    </li>
                    {/* 第四种方式  */}
                    <li>
                        第四种方式 使用styled-components  样式是一个组件
                        <Title>类组件</Title>
                    </li>
                    <li>还有一种是 styled-jsx  可以直接在组件里写style标签 （代码看起来很乱 不推荐）</li>
                </ol>
            </div>
        )
    }
}

render(
    <App />,
    document.querySelector('#root')
)