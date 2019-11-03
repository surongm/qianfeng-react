
## npm
 npm 官网 
  https://www.npmjs.com

## VSCode
 使用这个插件 ES7 React/Redux/GraphQL/React-Native snippets
 可使用rcc命令快速创建组件

 ## states

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

 ## 组件分类 
  ①函数式组件 类组件
  ②函数式组件——无状态组件
   类组件——有状态组件
  ③受控组件——所有状态都没有 通过外部props控制
   非受控组件——state控制
   半受控组件

<!-- 
 ## 检查 prop-types

 npm i prop-types -D
 import PropTypes  from 'prop-types'

  // 类组件PropTypes写法
  static propTypes = {
      btnText: PropTypes.string.isRequired
  }

  // 组件的默认的值  外面的值优先显示
  static defaultProps = {
      btnText:'添加ADD'
  } -->


