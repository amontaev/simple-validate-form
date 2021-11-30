import React, { useEffect, useState } from 'react'
import style from './style.module.scss'

interface SelectProps {
    options:Array<string>
}

const Select:React.FC<SelectProps> = props => {

    const [current, setCurrent] = useState("Нет данных")
    const [toggle, setToggle] = useState(false)

    const handleCurrent = (item:string) => {
        setCurrent(item)
        setToggle(false)
    }

    useEffect(()=>{
        if(props.options.length>0) {
            setCurrent(props.options[0])
        }
    },[props.options])

    return (
        <div className={style.container}>
            <div className={[style.select, toggle && style.toggle].join(" ")} onClick={()=>setToggle(prev=>!prev)}>
                <div className={style.input}>{current}</div>
                <div className={style.arrow}></div>
            </div>
            {toggle && <div className={style.dropdown}>
                <ul>
                    {
                        props.options.map((item: string, index: number)=>
                            <li key={index} onClick={()=>handleCurrent(item)}>{item}</li>
                        )
                    }
                </ul>
            </div>}
        </div>
    )
}

export default Select