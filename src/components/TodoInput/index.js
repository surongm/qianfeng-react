import React, { Component,createRef } from 'react'
import PropTypes  from 'prop-types'

// react通过ref来获取组件或者dom元素，使用ref之前必须先调用React.createRef方法来创建一个ref
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
        // this.handleAddClick = this.handleAddClick.bind(this)
        // 在constructor里面来创建ref
        this.inputDom = createRef()
    }

    handleInputChange = (e)=>{
        // console.log(e.currentTarget.value)
        this.setState({
            inputValue: e.currentTarget.value
        })
        // console.log(this.refs.inputValue.value)
    }

    handleAddClick = ()=>{
        console.log(this.inputDom)
        // 实际的项目中 这里要对value进行验证 验证通过再执行
        if(this.state.inputValue === "") {
            return false
        }
        this.props.addTodo(this.state.inputValue)
        this.setState({
            inputValue: ""
        },() => {
            this.inputDom.current.focus()
        })
       
    }
    handleKeyUp = (e) => {
        // console.log(e.keyCode)
        if(e.keyCode === 13){
            this.handleAddClick()
        }
    }
    render() {
        const { inputValue } = this.state
        return (
            <div>
                <input type="text" 
                    value={inputValue} 
                    onChange={this.handleInputChange}                    
                    onKeyUp={this.handleKeyUp}
                    // ref="inputvalue"
                    ref={this.inputDom}
                />
                <button 
                // 第二种 箭头函数 把方法提到外面 √
                onClick={this.handleAddClick}
                >
                    {this.props.btnText}
                </button>
            </div>
        )
    }
}
