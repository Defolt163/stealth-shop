'use client'
import Image from 'next/image'
import TemplateDash from '../../../components/template'
import '../open-order.sass'
import PayPal from '../../../../../../public/static/img/payment/paypal.svg'
import GooglePay from '../../../../../../public/static/img/payment/ggp.svg'
import ShopPay from '../../../../../../public/static/img/payment/shoppay.svg'
import DeliveryAddress from '../../../../components/DeliveryAddress/DeliveryAddress'
import database from '../../../../../../src/app/assets/db_products.json'
import { useEffect, useState } from 'react'

export default function OrderId(){
    const [productId, setProductId] = useState(null)
    useEffect(() => {
        const getUrlParams = () => {
        const url = window.location.pathname
        const parts = url.split('/')
        const id = parts[parts.length - 1]-1
        setProductId(id)
        };

        getUrlParams()
    }, [])
    const product = database[productId]
    return(
        <TemplateDash>
            <div className="OpenOrderPage">
                <div className='PaymentMethodBlock'>
                    <div className='PaymentMethod'><Image className='PaymentMethodImage' src={ShopPay}/></div>
                    <div className='PaymentMethod'><Image className='PaymentMethodImage' src={PayPal}/></div>
                    <div className='PaymentMethod'><Image className='PaymentMethodImage' src={GooglePay}/></div>
                </div>
                <div className='OpenOrderOr'></div>
                <DeliveryAddress BtnDescr="Продолжить" toBack=""/>
            </div>
        </TemplateDash>
    )
}