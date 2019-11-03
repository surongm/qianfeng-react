import React, { Component, Fragment } from 'react'
import {
    TodoHeader,
    TodoInput,
    TodoList
} from './components'

export default class App extends Component {
    // 类组件才有state
    // state = {
    //     title:"待办事项列表"
    // }
    constructor(){
        super()
        this.state = {
            title:"待办事项列表",
            desc: "今日事，今日毕"
        }
    }
    render() {
        return (
            <Fragment>
                <TodoHeader title={this.state.title}> 
                    {this.state.statedesc}
                </TodoHeader>
                <TodoInput/>
                <TodoList  btnText="ADD"/>
            </Fragment>
        )
    }
}
