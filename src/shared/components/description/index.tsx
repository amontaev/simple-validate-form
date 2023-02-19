import React from 'react'
import style from './style.module.scss'

const Description:React.FC = props => {
    return (<div className={style.description}>{props.children}</div>)
}

export default Description