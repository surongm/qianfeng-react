import React, { Component } from 'react'
import {
    TodoHeader,
    TodoInput,
    TodoList,
    Like
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
            desc: "今日事，今日毕",
            article: '<div>按时博大精深</div><i>fdtgrgtgt</i>',
            todos: [
                {
                    id:1,
                    title: "吃饭",
                    isCompleted: true
                },{
                    id:2,
                    title: "睡觉",
                    isCom: false
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <TodoHeader title={this.state.title}> 
                    {this.state.statedesc}
                </TodoHeader>
                <TodoInput/>
                <TodoList  btnText="ADD" todos={this.state.todos} />
                <Like />

            </div>
        )
    }
}
