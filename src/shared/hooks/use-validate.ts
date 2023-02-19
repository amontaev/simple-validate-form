import { useEffect, useState } from "react"

export const useValidate = (value:string, validations:Object) => {
    const [isAllValid,setIsAllValid] = useState(true)

    useEffect(()=>{
        for (const validation in validations) {
            switch(validation) {
                case 'isEmpty':
                    value ? setIsAllValid(prev=>prev || true): setIsAllValid(prev=>prev && false)
                    break;
                case 'isName':
                    const reName = /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/
                    reName.test(String(value).toLowerCase()) ? setIsAllValid(prev=>prev || true): setIsAllValid(prev=>prev && false)
                    break;
                case 'isEmail':
                    const reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    reEmail.test(String(value).toLowerCase()) ? setIsAllValid(prev=>prev || true): setIsAllValid(prev=>prev && false)
                    break;
                case 'isPhone':
                    const rePhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11}(\s*)?$/
                    rePhone.test(String(value).toLowerCase()) ? setIsAllValid(prev=>prev || true): setIsAllValid(prev=>prev && false)
                    break;
                }
        }
    },[value,validations])

    return isAllValid
}