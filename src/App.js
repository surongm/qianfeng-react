import React, { Component, Fragment } from 'react'
import {
    TodoHeader,
    TodoInput,
    TodoList
} from './components'

export default class App extends Component {
    render() {
        return (
            // 除去多余的div标签
            // Fragment 是一个react提供的空标签
            <Fragment>
                <TodoHeader title="待办事项"  x ={1} y={2}> 
                    今日事，今日毕
                </TodoHeader>
                <TodoInput/>
                <TodoList  btnText="ADD"/>
            </Fragment>
        )
    }
}
