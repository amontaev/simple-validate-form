import React from 'react'
import style from './style.module.css'

const TextField:React.FC = props => {
    return (<div className={style.global}>{props.children}</div>)
}

export default TextField