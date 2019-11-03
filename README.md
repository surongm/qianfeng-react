
## npm
 npm 官网 
  https://www.npmjs.com

小表情官网  
  https://emojipedia.org/
  

## 添加回车事件

  onKeyUp={this.handleKeyUp}
  handleKeyUp = (e) => {
    // console.log(e.keyCode)
    if(e.keyCode === 13){
        this.handleAddClick()
    }
  }

## 使用ref
添加获取焦点事件
  import { createRef } from 'react' 

  // 在constructor里面来创建ref
  this.inputDom = createRef()

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

  ref={this.inputDom}

  ## 获取input的值的第二种方法
  （暂时出了点小问题 日后再解决）
  <input ref='username' onChange={()=>this.inputChange()}/>
    inputChange(){
      //获取dom节点元素
      //1.添加ref属性
      //2.使用this.refs.username获取dom节点
      let val=this.refs.username.value;
      this.setState({
        username:val
      })
    }
  使用ref自定义一个属性，可以通过this.refs.属性名称.value获取内容。

