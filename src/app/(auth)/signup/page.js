'use client'
import Link from 'next/link'
import '../style.sass'
import { useState, useEffect } from 'react';
import GetUser from '../../configFiles/MysqlRequests/requestfile';
import { useRouter } from 'next/navigation';
export default function SignUpPage(){

    const router = useRouter()

    const [registeredAccounts, setRegisteredAccounts] = useState([])
    const data = GetUser()
    useEffect(() => {
        setRegisteredAccounts(data)
    }, [data]);


    const [userEmail, setUserEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('')
    const [userPasswordConfirm, setUserPasswordConfirm] = useState('')



    let setAccount = {
        UserName: userName,
        UserEmail: userEmail,
        UserPassword: userPassword
    }
    function SendAccount(){
        registeredAccounts.some(account => account.UserEmail === userEmail) ? alert('Аккаунт с таким Email Уже зарегистрирован') :
        userEmail === '' || userPassword === '' ? alert(`Пожалуйста, заполните необходимые поля: ${userPassword === '' ? 'Пароль' : userEmail === '' ? 'Email' : 'Email и Пароль'}`) :
        userPassword !== userPasswordConfirm ? alert("Пароли не совпадают") :
        fetch('/api/data',{
        method: 'POST',
        body: JSON.stringify(setAccount),
        headers: {'content-type':'application/json'},
        }).then((res) =>{
            setAccount = res.json()
            router.push('/account')
            alert("Успешно")
        }).catch(error=>{
            console.log("Error", error)
            alert("Произошла ошибка регистрации, повторите снова")
        })

    }
    return(
        <div className="AuthPage">
            <div className="AuthPageFirstBlock">
                <div className='AuthPageFirstBlockWrapper'>
                    <div className="AuthPageHeader">Регистрация</div>
                    <div className="InputBlock">
                        <input className="InputAuthItem" placeholder="Ваше имя" value={userName} onChange={(event) => setUserName(event.target.value)}/>
                        <input className="InputAuthItem" placeholder="Введите Email" type="email" value={userEmail} onChange={(event) => setUserEmail(event.target.value)}/>
                        <input className="InputAuthItem" placeholder="Введите пароль" type="password" name="password" minlength="8" value={userPassword} onChange={(event) => setUserPassword(event.target.value)}/>
                        <input className="InputAuthItem" placeholder="Подтвердите пароль" value={userPasswordConfirm} onChange={(event) => setUserPasswordConfirm(event.target.value)}/>
                        <div className='LoginBtn' onClick={()=>{SendAccount()}}>Зарегистрироваться</div>
                    </div>
                    <Link className='AuthPageDescr' href='/login'>Уже с нами? <span>Войдите</span></Link>
                </div>
            </div>
            <div className='AuthPageSecondBlock'></div>
        </div>
    )
}