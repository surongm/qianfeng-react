
## npm
 npm 官网 
  https://www.npmjs.com

## 样式

① 行内样式
    style={{color:'red',}}
    或者 
    const style = {color:'green'}
    style={style}

②外部样式
    import './index.css'

③动态创建样式
    npm i classnames -D
    import classNames from 'classnames'
    className={classNames('a',{'b':true,'c':false})}

④样式组件
    npm i styled-components -D
    import styled from 'styled-components'
    const Title = styled.h1`
        color: yellow;
        text-align:center
    `
    <Title>类组件</Title>

还有一种是 styled-jsx  可以直接在组件里写style标签 （代码看起来很乱 不推荐）