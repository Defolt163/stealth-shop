import Link from 'next/link'
import '../style.sass'
export default function LoginPage(){
    return(
        <div className="AuthPage">
            <div className="AuthPageFirstBlock">
                <div className='AuthPageFirstBlockWrapper'>
                    <div className="AuthPageHeader">Войти в аккаунт</div>
                    <div className="InputBlock">
                        <input className="InputAuthItem" placeholder="Email"/>
                        <input className="InputAuthItem" placeholder="Пароль"/>
                        <div className='LoginBtn'>Войти</div>
                    </div>
                    <Link className='AuthPageDescr' href='/reset-password'>Забыли пароль?</Link>
                    <Link className='AuthPageDescr' href='/signup'>Еще нет аккаунта? <span>Зарегистрируйтесь</span></Link>
                </div>
            </div>
            <div className='AuthPageSecondBlock'></div>
        </div>
    )
}