'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import './AccountMenu.sass';
import { useRouter } from 'next/navigation';
import GetUser from "../../configFiles/MysqlRequests/requestfile";
import { useCookies } from 'react-cookie';

export default function AccountMenu() {
  const [cookies] = useCookies(['UserData'])
  const userData = cookies.UserData
  let UserId = userData.userId
  const data = GetUser(UserId)
  

  const router = useRouter()
  function deleteCookie() {
    document.cookie = "UserData" + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    router.push('/')
  }

    return (
      <div className="AccountMenu">
        <div className="AccountMenuWrapper">
          <div className="ProfileName">{data && data.length > 0 ? data[0]?.UserName + '\n' + data[0]?.UserSurname : ''}</div>
          <div className="AccountMenuItems">
            <Link href='/account' className={`AccountMenuItem`}>
              Аккаунт
            </Link>
            <Link href='/account-settings' className={`AccountMenuItem`}>
              Адреса
            </Link>
            <Link href='/' className={`AccountMenuItem`}>
              Заказы
            </Link>
            <Link href='/cart' className={`AccountMenuItem`}>
              Корзина
            </Link>
            <div onClick={()=>{deleteCookie()}} className='AccountMenuItem'>Выйти</div>
          </div>
        </div>
      </div>
    )
  }