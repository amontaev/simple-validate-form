import React from 'react'
import style from './style.module.css'

interface TextFieldProps {
    placeholder:string,
    value:string,
    onChange:(e: React.ChangeEvent<HTMLInputElement>) => void,
    onBlur:(e: React.ChangeEvent<HTMLInputElement>) => void,
}

const TextField:React.FC<TextFieldProps> = props => {
    return (<input type="text" className={style.input} placeholder={props.placeholder} value={props.value} onChange={props.onChange} onBlur={props.onBlur}/>)
}

export default TextField