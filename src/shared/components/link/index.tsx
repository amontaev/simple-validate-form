import React from 'react'
import style from './style.module.css'

interface LinkProps {
    to:string
}

const Link:React.FC<LinkProps> = props => {
    return (<a className={style.link} href={props.to}>{props.children}</a>)
}

export default Link