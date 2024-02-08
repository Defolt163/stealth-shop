'use client'
import Image from "next/image";
import Link from "next/link";
import logoImage from '/public/static/img/logo.svg'
import './style.sass'
import 'react-phone-number-input/style.css'
import { useRouter } from "next/navigation";

export default function OrderLayout({ children }) {
  const router = useRouter()
  function goBack(){
    router.push('/')
    setTimeout(() => {
      window.location.reload();
    }, 1000)
  }
  
  return (
    <html lang="en">
      <body>
        <div className="container">
          <div className="OrderHeader">
            <div className="logo" onClick={()=>{goBack()}}><Image src={logoImage} alt="stealth logo"/></div>
          </div>
          <div className='OpenOrderPageLinks'>
            <Link href='/cart' className='OpenOrderPageLink'>Корзина</Link> {`> `} 
            <Link href='/cart/open-order' className='active OpenOrderPageLink'>Информация</Link> {`> `} 
            <Link href='/' className='OpenOrderPageLink'>Оплата</Link>
          </div>
          {children}
        </div>
      </body>
    </html>
  )
}
