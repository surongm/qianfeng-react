import React, { Component } from 'react'
import TodoItem from './TodoItem.js'
import PropTypes from 'prop-types'

export default class TodoList extends Component {
    static propTypes = {
        // 只能设置数组里面是一个对象
        // todos: PropTypes.arrayOf(PropTypes.object)
        // 可以设置数组里面的对象的每个属性
        todos: PropTypes.arrayOf(PropTypes.shape({
            id:PropTypes.number.isRequired,
            title:PropTypes.string.isRequired,
            isCompleted:PropTypes.bool.isRequired
        })).isRequired,
        // 数组也是必须传
        // 不一定是必须的 可以不传
        onCompeletedChange: PropTypes.func
    }
    render() {
        console.log(this.props)
        return (
            <ul>
                {
                    this.props.todos.map(todo => {
                        return (
                            <TodoItem 
                                key={todo.id}
                                // id={todo.id}
                                // title={todo.title}
                                // isCompleted={todo.isCompleted}
                                // 这样传递更方便
                                {...todo}
                                // 不能跨组件传 只能一层层来传递给子组件  三层以内是这样子传递
                                onCompeletedChange={this.props.onCompeletedChange}
                            />
                        )
                    })
                }
            </ul>
        )
    }
}
