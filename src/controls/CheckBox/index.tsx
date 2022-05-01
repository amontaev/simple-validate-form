import React from 'react'
import style from './style.module.css'

interface CheckProps {
    checked:boolean,
    onChange:()=>void
}

const CheckBox:React.FC<CheckProps> = props => {
    return (<div className={[style.checkbox, props.checked && style.checked].join(" ")} onClick={props.onChange}>&#10004;</div>)
}

export default CheckBox