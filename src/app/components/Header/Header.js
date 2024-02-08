'use client'
import Link from 'next/link'
import './HeaderStyle.sass'
import Image from 'next/image'
import ShoppingBagIco from '/public/static/img/ico/shopping-bag.svg'
import Logo from '/public/static/img/logo.svg'
import { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/navigation'


export default function Header(){
    const router = useRouter()
    const [dropdownStatus, setDropdownStatus] = useState('')
    const [humburgerStatus, setHumburgerStatus] = useState('')

    function openHumburger(){
        if (humburgerStatus === 'active') {
            setHumburgerStatus('');
            document.body.style.overflow = 'visible';
          } else {
            setHumburgerStatus('active');
            document.body.style.overflow = 'hidden';
          }
    }

    function openDropdown(menuName){
        setDropdownStatus(menuName)
    }
    function closeDropdown(){
        setDropdownStatus('')
    }


    const [cookies] = useCookies(['UserData'])
    const userData = cookies.UserData

    function deleteCookie() {
        document.cookie = "UserData" + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
        alert("Вы вышли из системы")
    }

    return(
            <div className="Header">
                <div className='container'>
                    <div className='HeaderWrapper'>
                        <Link href='/' className='logo'><Image src={Logo} width="600" height="auto" alt='stealthVision'/></Link>
                        <ul className='HeaderMenu'>
                            <li className={`HeaderMenuItem ${dropdownStatus === 'targeting' ? 'active' : ''}`}>
                                <Link 
                                    href='/' 
                                    onMouseEnter={()=>(openDropdown('targeting'))} 
                                    onMouseLeave={()=>(closeDropdown())}>
                                        Прицелы 
                                        <div className='Chevron'>
                                            <div className='ChevronLine'></div>
                                        </div>
                                </Link>
                                <ul className='DropdownMenu'
                                    onMouseEnter={()=>(openDropdown('targeting'))} 
                                    onMouseLeave={()=>(closeDropdown())}
                                    >
                                    <Link href='/product/1' className='DropdownMenuItem'>Оптический прицел</Link>
                                    <Link href='/' className='DropdownMenuItem'>Калиматоры</Link>
                                    <Link href='/' className='DropdownMenuItem'>Инфракрасные прицелы</Link>
                                </ul>
                            </li>
                            <li className='HeaderMenuItem'><Link href='/product/2'>Винтовка + Прицел</Link></li>
                            <li className='HeaderMenuItem'><Link href='/product/3'>Бинокль</Link></li>
                            <li className={`HeaderMenuItem ${dropdownStatus === 'other' ? 'active' : ''}`}>
                                <Link 
                                    href='/' 
                                    onMouseEnter={()=>(openDropdown('other'))} 
                                    onMouseLeave={()=>(closeDropdown())}>
                                        Прочее 
                                        <div className='Chevron'>
                                            <div className='ChevronLine'></div>
                                        </div>
                                </Link>
                                <ul className='DropdownMenu'
                                    onMouseEnter={()=>(openDropdown('other'))} 
                                    onMouseLeave={()=>(closeDropdown())}
                                    >
                                    <li className='DropdownMenuItem'><Link href='/about'>О нас</Link></li>
                                    <li className='DropdownMenuItem'><Link href='/helpful'>Помощь</Link></li>
                                    <li className='DropdownMenuItem'><Link href='/contacts'>Контакты</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <div className='UserActions'>
                            <div onClick={()=>{
                                userData?.logginin === true ? router.push('/account') : router.push('/login')
                            }} className='Button ButtonUser'>
                                {
                                    userData?.logginin === true ? 'Аккаунт' : "Войти"
                                }
                            </div>
                            <Link href='/cart'><Image className='UserShopCart' src={ShoppingBagIco} alt='Корзина'/></Link>
                        </div>
                        <div onClick={()=>{openHumburger()}} className={`Humburger ${humburgerStatus}`}>
                            <div className='HumburgerIcoWrapper'>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`HumburgerMenu ${humburgerStatus}`}>
                    <ul className='HeaderMenu'>
                        <li className={`HeaderMenuItem`}>
                            <Link 
                                href='/' 
                                onMouseEnter={()=>(openDropdown('targeting'))} 
                                onMouseLeave={()=>(closeDropdown())}>
                                    Прицелы 
                                    <div className='Chevron'>
                                        <div className='ChevronLine'></div>
                                    </div>
                            </Link>
                            <ul className='DropdownMenu'
                                onMouseEnter={()=>(openDropdown('targeting'))} 
                                onMouseLeave={()=>(closeDropdown())}
                                >
                                <li className='DropdownMenuItem'><Link href='/product/1'>Оптический прицел</Link></li>
                                <li className='DropdownMenuItem'><Link href='/'>Калиматоры</Link></li>
                                <li className='DropdownMenuItem'><Link href='/'>Инфракрасные прицелы</Link></li>
                            </ul>
                        </li>
                        <li className='HeaderMenuItem'><Link href='/product/2'>Винтовка + Прицел</Link></li>
                        <li className='HeaderMenuItem'><Link href='/product/3'>Бинокль</Link></li>
                        <li className={`HeaderMenuItem`}>
                            <Link 
                                href='/' 
                                onMouseEnter={()=>(openDropdown('other'))} 
                                onMouseLeave={()=>(closeDropdown())}>
                                    Прочее 
                                    <div className='Chevron'>
                                        <div className='ChevronLine'></div>
                                    </div>
                            </Link>
                            <ul className='DropdownMenu'
                                onMouseEnter={()=>(openDropdown('other'))} 
                                onMouseLeave={()=>(closeDropdown())}
                                >
                                <li className='DropdownMenuItem'><Link href='/about'>О нас</Link></li>
                                <li className='DropdownMenuItem'><Link href='/helpful'>Помощь</Link></li>
                                <li className='DropdownMenuItem'><Link href='/contacts'>Контакты</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <div className='UserActions'>
                        <div onClick={()=>{
                                userData?.logginin === true ? router.push('/account') & openHumburger() : router.push('/login')
                            }} className='Button ButtonUser'>
                                {
                                    userData?.logginin === true ? 'Аккаунт' : "Войти"
                                }
                        </div>
                        <Link href='/' className='Button ButtonUser'>Корзина</Link>
                    </div>
                </div>
            </div>
    )
}