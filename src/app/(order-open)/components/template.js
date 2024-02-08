'use client'
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import '../style.sass'
import CostBreakup from "../../components/CostBreakup/CostBreakup";
import { useRouter } from 'next/navigation'

export default function TemplateDash ({ children }) {
    const router = useRouter()
    const [cookies] = useCookies(['UserData'])
    const userData = cookies.UserData
    const [priceValue, setPieceValue] = useState()

    const getPriceValue = (value) => {
        setPieceValue(value)
      }
    if (userData?.logginin === true) {
        return (
                <div className="Dashboard">
                    <div className="container">
                        <div className="DashboardWrapper">
                            {priceValue <= 7.5 ? 
                                <div className='LoadingScreen'>
                                    <div>Загрузка товаров из корзины...</div>
                                    <div>Если ваша корзина пуста или вы не авторизованы нажмите на кнопку</div>
                                    <div onClick={()=>{router.back()}}>Назад</div>
                                </div> : <div className="OrderInfo">{children}</div>
                            }
                            <CostBreakup callback={getPriceValue}/>
                        </div>
                    </div>
                </div>
            )}else if (typeof window !== 'undefined') {
                router.push('/login')
            }
        
    
}