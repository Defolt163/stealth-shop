'use client'
import './open-order.sass'
import PayPal from '/public/static/img/payment/paypal.svg'
import GooglePay from '/public/static/img/payment/ggp.svg'
import ShopPay from '/public/static/img/payment/shoppay.svg'
import Image from 'next/image'
import DeliveryAddress from '../../../components/DeliveryAddress/DeliveryAddress'
import TemplateDash from '../../components/template'


export default function OpenOrderPage(){
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