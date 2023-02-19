import React from 'react'
import style from './style.module.scss'

const Form:React.FC = props => {
    return (
        <form className={style.container}>
            {props.children}
        </form>
    )
}

export default Form