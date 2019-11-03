import React, { Component } from 'react'

export default class TodoItem extends Component {
    handleCheckboxChange = () => {
        // react中数据控制的 不能通过dom来改变 但是事件可以触发
        // 需要修改数据源
        // console.log("changed")
        this.props.onCompeletedChange && this.props.onCompeletedChange(this.props.id)
    }
    render() {
        return (
            <li>
                <input 
                 type="checkbox"
                 checked = {this.props.isCompleted}
                 onChange={this.handleCheckboxChange}
                />
                {this.props.title}
                {this.props.isCompleted ? "已完成" : "未完成"}
            </li>
        )
    }
}
