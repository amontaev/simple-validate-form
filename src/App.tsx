import React, { useEffect, useState } from 'react';
import ResourceService from './api/FakeApi';
import './App.css';
import Description from './component/Description';
import Form from './component/Form';
import Global from './component/Global';
import Label from './component/Label';
import Link from './component/Link';
import MessageError from './component/MessageError';
import Place from './component/Place';
import Title from './component/Title';
import Button from './controls/Button';
import CheckBox from './controls/CheckBox';
import Select from './controls/Select';
import TextField from './controls/TextField';
import { useInput } from './hooks/useInput';

function App() {

  const inputName = useInput("",{isEmpty:true, isName:true})
  const inputEmail = useInput("",{isEmpty:true, isEmail:true})
  const inputPhone = useInput("",{isEmpty:true, isPhone:true})
  const [dropdownList, setDropdownList] = useState<Array<string>>([])
  const [checked, setChecked] = useState(false)

  useEffect(()=>{
    setDropdownList(ResourceService.getLanguages())
  },[])

  return (
    <Form>
      <Title>Регистрация</Title>
      <Global>
        <Description>
          У вас уже есть аккаунт? <Link to="#">Войти</Link>
        </Description>
      </Global>
      <Place>
        <Label>Имя</Label>
        <TextField placeholder="Введите ваше имя" value={inputName.value} onChange={inputName.changeInput} onBlur={inputName.onBLur} />
        <MessageError>{(inputName.isBlur && !inputName.valid) && <>Введено не корректное значение</>}</MessageError>
      </Place>
      <Place>
        <Label>Email</Label>
        <TextField placeholder="Введите ваш email" value={inputEmail.value} onChange={inputEmail.changeInput} onBlur={inputEmail.onBLur} />
        <MessageError>{(inputEmail.isBlur && !inputEmail.valid) && <>Введено не корректное значение</>}</MessageError>
      </Place>
      <Place>
        <Label>Номер телефона</Label>
        <TextField placeholder="Введите номер телефона" value={inputPhone.value} onChange={inputPhone.changeInput} onBlur={inputPhone.onBLur} />
        <MessageError>{(inputPhone.isBlur && !inputPhone.valid) && <>Введено не корректное значение</>}</MessageError>
      </Place>
      <Place>
        <Label>Язык</Label>
        <Select options={dropdownList}/>
      </Place>
      <Global>
        <Description>
          <CheckBox checked={checked} onChange={()=>setChecked(!checked)}/> Принимаю <Link to="#">условия</Link> использования
        </Description>
      </Global>
      <Place>
        <Button disabled={!(inputName.valid && inputEmail.valid && inputPhone.valid && checked)}>Зарегистрироваться</Button>
      </Place>
    </Form>
  )
}
export default App;
