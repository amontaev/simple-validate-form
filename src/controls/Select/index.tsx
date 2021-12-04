import React, { useEffect, useState } from 'react'
import style from './style.module.scss'

interface SelectProps {
    options:Array<string>
}

const Select:React.FC<SelectProps> = ({options}) => {

    const [current, setCurrent] = useState("Нет данных")
    const [toggle, setToggle] = useState(false)
    

    const handleCurrent = (item:string) => {
        setCurrent(item)
        setToggle(false)
    }

    useEffect(()=>{
        if(options.length>0) {
            setCurrent(options[0])
        }
    },[options])

    return (
        <div className={style.container}>
            <div className={[style.select, toggle && style.toggle].join(" ")} onClick={()=>setToggle(prev=>!prev)}>
                <div className={style.input}>{current}</div>
                <div className={style.arrow}></div>
            </div>
            {toggle && <div className={style.dropdown}>
                <ul>
                    {
                        options.map((item: string, index: number)=>
                            <li key={index} onClick={()=>handleCurrent(item)}>{item}</li>
                        )
                    }
                </ul>
            </div>}
        </div>
    )
}

export default Select