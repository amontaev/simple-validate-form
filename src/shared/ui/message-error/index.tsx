import React from 'react'
import style from './style.module.css'

const MessageError:React.FC = props => {
    return (<span className={style.message}>{props.children}</span>)
}

export default MessageError