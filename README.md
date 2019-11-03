
## npm
 npm 官网 
  https://www.npmjs.com

小表情官网  
  https://emojipedia.org/
  

## 获取input中的内容

  <input type="text" 
    value={inputValue} 
    onChange={this.handleInputChange}
  />

  handleInputChange = (e)=>{
    // console.log(e.currentTarget.value)
    this.setState({
        inputValue: e.currentTarget.value
    })
  }

## react中添加事件

  // 第一种方式 直接用箭头函数  不推荐
  //  onClick={()=>{ console.log(inputValue)}}

  // 第二种 箭头函数 把方法提到外面 √
  onClick={this.handleAddClick}

    // handleAddClick = (e)=>{
    //     const { inputValue } = this.state
    //     console.log(inputValue)
    // }

  // 第三种  bind(this)
  // onClick={this.handleAddClick.bind(this)}

  // 第四种 √
  // onClick={this.handleAddClick}

   this.handleAddClick = this.handleAddClick.bind(this)
   // handleAddClick (id){
  //     const { inputValue } = this.state
  //     console.log(inputValue)
  // }


  // 如何传参
  // onClick={this.handleAddClick.bind(111)}  错误
  // onClick={()=>{this.handleAddClick.bind(111)}} 不推荐
  // onClick={this.handleAddClick.bind(this,111)} √

## 父传子 子组件如何调用父组件的方法

父组件
  addTodo = (todoTitle) =>{
        console.log(todoTitle)
  }
  <TodoInput addTodo={this.addTodo}/>

子组件
子组件点击的时候触发 并传参数到父组件
  handleAddClick = ()=>{
        this.props.addTodo(this.state.inputValue)
  }

## setState对象/数组 如何赋值

    // push返回的是数组的长度  错误
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
