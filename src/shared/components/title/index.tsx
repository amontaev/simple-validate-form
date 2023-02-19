import React from 'react'
import style from './style.module.scss'

const Title:React.FC = props => {
    return (<h1 className={style.title}>{props.children}</h1>)
}

export default Title