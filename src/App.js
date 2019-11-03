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
                <TodoHeader />
                <TodoInput />
                <TodoList />
            </Fragment>

            // 或者直接使用空标签
            // <>
            //     <TodoHeader />
            //     <TodoInput />
            //     <TodoList />
            // </>
        )
    }
}
