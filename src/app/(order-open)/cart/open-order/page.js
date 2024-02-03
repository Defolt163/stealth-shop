'use client'
import Link from 'next/link'
import './open-order.sass'
import PayPal from '/public/static/img/payment/paypal.svg'
import GooglePay from '/public/static/img/payment/ggp.svg'
import ShopPay from '/public/static/img/payment/shoppay.svg'
import Image from 'next/image'
import PhoneInput from 'react-phone-number-input'
import { useEffect, useState } from 'react'
import GetUser from '../../../configFiles/MysqlRequests/requestfile'
import { useCookies } from 'react-cookie'
import DeliveryAdress from '../../../components/DeliveryAdress/DefliveryAdress'


export default function OpenOrderPage(){
    return(
        <div className="OpenOrderPage">
            <div className='PaymentMethodBlock'>
                <div className='PaymentMethod'><Image className='PaymentMethodImage' src={ShopPay}/></div>
                <div className='PaymentMethod'><Image className='PaymentMethodImage' src={PayPal}/></div>
                <div className='PaymentMethod'><Image className='PaymentMethodImage' src={GooglePay}/></div>
            </div>
            <div className='OpenOrderOr'></div>
            <DeliveryAdress BtnDescr="Продолжить" toBack=""/>
        </div>
    )
}