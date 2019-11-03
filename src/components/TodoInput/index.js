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
    render() {
        return (
            <div>
                <input type="text" /><button>{this.props.btnText}</button>
                {/* 现在一般不用下面的写法 */}
                {/* <input type="text" /><button>{this.props.btnText || "添加"}</button> */}
            </div>
        )
    }
}
