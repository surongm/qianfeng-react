import React from 'react'
import PropTypes  from 'prop-types'

export default function TodoHeader(props) {
    // children 是两个标签之间的内容
    console.log(props)
    return (
        <>
            <h1>
                {props.title}
            </h1>
            <p>{props.children}</p>
            <p>{props.x + props.y}</p>
        </>
    )
}

// 函数式组件PropTypes写法
TodoHeader.propTypes = {
    title: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
}

// 函数式组件默认defaultProps写法
TodoHeader.defaultProps = {
    title: "如果今天过去了",
}
