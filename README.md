
## npm
 npm 官网 
  https://www.npmjs.com

## VSCode
 使用这个插件 ES7 React/Redux/GraphQL/React-Native snippets
 可使用rcc命令快速创建组件

 ## props

 props.title
 props.children 

 父组件
 x = "1" y="2"

 子组件
 x+y =12

父组件
 x = {1} y={2}

 子组件
 x+y =3

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
  }

