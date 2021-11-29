import React from 'react'
import style from './style.module.scss'

const Button:React.FC = props => {
    return (<button type="button" className={style.button} >{props.children}</button>)
}

export default Button