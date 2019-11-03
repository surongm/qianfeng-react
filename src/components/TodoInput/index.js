import React, { Component } from 'react'
import PropTypes  from 'prop-types'

export default class TodoInput extends Component {
    // 类组件PropTypes写法
    static propTypes = {
        btnText: PropTypes.string.isRequired
    }
    // 组件的默认的值  外面的值优先显示
    static defaultProps = {
        btnText:'添加ADD'
    }

    constructor(){
        super()
        this.state = {
            inputValue: ""
        }
        this.handleAddClick = this.handleAddClick.bind(this)
    }

    handleInputChange = (e)=>{
        // console.log(e.currentTarget.value)
        this.setState({
            inputValue: e.currentTarget.value
        })
    }

    // 第二种 把方法提到外面
    // handleAddClick = (e)=>{
    //     const { inputValue } = this.state
    //     console.log(inputValue)
    // }

    // 第三种
    // handleAddClick (id){
    //     const { inputValue } = this.state
    //     console.log(inputValue)
    // }

    handleAddClick = ()=>{
        this.props.addTodo(this.state.inputValue)
    }
    render() {
        const { inputValue } = this.state
        return (
            <div>
                <input type="text" 
                    value={inputValue} 
                    onChange={this.handleInputChange}
                />
                <button 
                // 第一种方式 直接用箭头函数  不推荐
                //  onClick={()=>{ console.log(inputValue)}}

                // 第二种 箭头函数 把方法提到外面 √
                onClick={this.handleAddClick}

                // 第三种  bind(this)
                // onClick={this.handleAddClick.bind(this,111)}

                // 第四种 √
                // onClick={this.handleAddClick}

                // 传参
                // onClick={this.handleAddClick.bind(111)}  错误
                // onClick={()=>{this.handleAddClick.bind(111)}} 不推荐
                // onClick={this.handleAddClick.bind(this,111)}

                >
                    {this.props.btnText}
                </button>
            </div>
        )
    }
}
