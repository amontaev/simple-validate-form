import React from 'react'
import style from './style.module.scss'

interface ButtonProps {
    disabled?:boolean
}

const Button:React.FC<ButtonProps> = props => {
    return (<button type="button" className={style.button} disabled={props.disabled}>{props.children}</button>)
}

export default Button