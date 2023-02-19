import React, { useEffect, useState } from 'react';
import ResourceService from 'shared/api/fake-api';
import Description from 'shared/ui/description';
import Form from 'shared/ui/form';
import Global from 'shared/ui/global';
import Label from 'shared/ui/label';
import Link from 'shared/ui/link';
import MessageError from 'shared/ui/message-error';
import Place from 'shared/ui/place';
import Title from 'shared/ui/title';
import Button from 'shared/ui/button';
import CheckBox from 'shared/ui/check-box';
import Select from 'shared/ui/select';
import { useInput } from 'shared/hooks/use-input';
import TextField from 'shared/ui/text-field';

const RegistrationPage:React.FC = props => {

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

export default RegistrationPage;
