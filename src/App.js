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

    addTodo = (todoTitle) =>{
        console.log(todoTitle)
        // push返回的是数组的长度
        // this.setState({
        //     todos: this.state.todos.push({
        //         id: Math.random(),
        //         title:todoTitle,
        //         isCompleted: false
        //     })
        // })

        // √ concat生成一个新数组
        // this.setState({
        //     todos: this.state.todos.concat({
        //         id: Math.random(),
        //         title:todoTitle,
        //         isCompleted: false
        //     })
        // })

        // √
        // 数组的拷贝
        // const newTodos = this.state.todos.slice()
        const newTodos = [...this.state.todos]
        newTodos.push({
            id: Math.random(),
            title:todoTitle,
            isCompleted: false
        })
        this.setState({
            todos: newTodos
        })
    }

    render() {
        return (
            <div>
                <TodoHeader title={this.state.title}> 
                    {this.state.statedesc}
                </TodoHeader>
                <TodoInput addTodo={this.addTodo}/>
                <TodoList  btnText="ADD" todos={this.state.todos} />
                <Like />

            </div>
        )
    }
}
