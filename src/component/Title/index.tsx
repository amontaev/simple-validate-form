import React from 'react'
import style from './style.module.scss'

const Title:React.FC = props => {
    return (<div className={style.title}>{props.children}</div>)
}

export default Title