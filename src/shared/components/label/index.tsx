import React from 'react'
import style from './style.module.css'

const Label:React.FC = props => {
    return (<div className={style.label}>{props.children}</div>)
}

export default Label