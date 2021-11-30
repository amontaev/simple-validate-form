import { useState } from "react"
import { useValidate } from "./useValidate"

export const useInput = (startValue:string, validations:any) => {
    const [value, setValue] = useState(startValue)
    const [isBlur, setBlur] = useState(false)

    const valid = useValidate(value,validations)

    const changeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
    }

    const onBLur = (e:React.ChangeEvent<HTMLInputElement>) => {
      setBlur(true)
    }

    return {value, isBlur, changeInput, onBLur, valid}
}