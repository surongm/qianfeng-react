
## npm
 npm 官网 
  https://www.npmjs.com

## VSCode
 https://emojipedia.org/

 ## props的传递

  {
    this.state.todos.map(todo => {
        return <div key={todo.id}>{todo.title}</div>
    })
  }

  三元表达式 
  {this.props.isCompleted ? "已完成" : "未完成"}


##  dangerouslySetInnerHTML
直接使用即可
  {/* 如何展示带标签 */}
  <div dangerouslySetInnerHTML={{__html:this.state.article}}></div>

## 数据传递
数组 对象可以展开传递
  <TodoItem 
    key={todo.id}
    {...todo}
  />


