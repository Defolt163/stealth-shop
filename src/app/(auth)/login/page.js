'use client'
import Link from 'next/link'
import '../style.sass'
import GetUser from '../../configFiles/MysqlRequests/loginrequest'
import {useState} from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage(){
    const router = useRouter()
    const data = GetUser()

    const [inputPassword, setInputPassword] = useState('')
    const [inputLogin, setInputLogin] = useState('')
    // User Data
    const [userName, setUserName] = useState('')
    const [userSurName, setUserSurName] = useState('')
    const [userCity, setuserCity] = useState('')
    const [userStreet, setUserStreet] = useState('')
    const [userHouse, setUserHouse] = useState('')
    const [userApartment, setUserApartment] = useState('')
    const [userId, setUserId] = useState('')
    const [logginIn, setLogginIn] = useState('')

    function setCookie(name, value, days) {
        var expires = ""
    
        if (days) {
            var date = new Date()
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
            expires = "; expires=" + date.toUTCString()
        }
    
        document.cookie = name + "=" + decodeURIComponent(value) + expires + "; path=/"
    }

    function handleAuth() {
        if (data.length === 0) {
            alert("Загрузка данных...");
            return;
        }
        
        
        for (let i = 0; i < data.length; i++) {
            if (inputLogin === data[i].UserEmail && inputPassword === data[i].UserPassword) {
                setLogginIn(true);
                setUserName(data[i].UserName);
                setUserSurName(data[i].UserSurname);
                setuserCity(data[i].UserCity);
                setUserStreet(data[i].UserStreet);
                setUserHouse(data[i].UserHouse);
                setUserApartment(data[i].UserApartment);
                setUserId(data[i].UserId);
                
                // Обновление куки
                setCookie('UserData', JSON.stringify({
                    logginin: true,
                    userName: data[i].UserName,
                    userSurName: data[i].UserSurname,
                    userCity: data[i].UserCity,
                    userStreet: data[i].UserStreet,
                    userHouse: data[i].UserHouse,
                    userApartment: data[i].UserApartment,
                    userId: data[i].UserId
                }), 30);
                alert("OK")
                router.push('/account')
                const timeout = setTimeout(() => {
                    window.location.reload();
                    }, 1000);
                
                    // Cleanup the timeout on component unmount
                return () => clearTimeout(timeout);
            }
        }
        
        alert("Nope");
    }

    return(
        <div className="AuthPage">
            <div className="AuthPageFirstBlock">
                <div className='AuthPageFirstBlockWrapper'>
                    <div className="AuthPageHeader">Войти в аккаунт</div>
                    <form className="InputBlock">
                        <input className="InputAuthItem" required placeholder="Email" type="email" value={inputLogin} onChange={(event) => setInputLogin(event.target.value)}/>
                        <input className="InputAuthItem" required placeholder="Пароль" type="password" name="password" minlength="8" value={inputPassword} onChange={(event) => setInputPassword(event.target.value)}/>
                        <div className='LoginBtn' type="submit" onClick={()=>{handleAuth()}}>Войти</div>
                    </form>
                    <Link className='AuthPageDescr' href='/reset-password'>Забыли пароль?</Link>
                    <Link className='AuthPageDescr' href='/signup'>Еще нет аккаунта? <span>Зарегистрируйтесь</span></Link>
                </div>
            </div>
            <div className='AuthPageSecondBlock'></div>
        </div>
    )
}