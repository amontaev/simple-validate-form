import React from 'react'
import style from './style.module.scss'

const Place:React.FC = props => {
    return (<div className={style.place}>{props.children}</div>)
}

export default Place