'use client'
import './style.sass'
import Image from "next/image";
import Link from "next/link";
import messageIco from '/public/static/img/ico/message-ico.svg'
import mapIco from '/public/static/img/ico/map-ico.svg'
import phoneIco from '/public/static/img/ico/phone-ico.svg'
import OtherPageSubheader from '../components/OtherPageSubheader/OtherPageSubheader'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize'

export default function ContactPage(){
    const [userPhone, setUserPhone] = useState('')
    const [inputName, setInputName] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    const [inputMessage, setInputMessage] = useState('')

    return(
        <>
            <OtherPageSubheader contacts='active'/>
            <div className="container">
                <div className='ContactPage'>
                    <div className="ContactAddresses">
                        <h2 className="ContactHeader">Связаться</h2>
                        <h3 className="ContactSubheader">Наша дружная команда была бы рада получить от вас сообщение.</h3>
                        <div className="ContactAddressBlock">
                            <div className="ContactAddressItem">
                                <div className="ContactAddressDescr">
                                    <Image alt="messageIco" src={messageIco} className="ContactItemIco"/>
                                    <div className="ContactAddressLine">
                                        <div className="ContactAddressHeader">Связаться с нами</div>
                                        <div className="ContactAddressSubheader">Наша дружная команда здесь, чтобы помочь.</div>
                                        <Link href='mailto:stealthvisionusa@gmail.com' className="ContactAddressLink">stealthvisionusa@gmail.com</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="ContactAddressItem">
                                <div className="ContactAddressDescr">
                                    <Image alt="mapIco" src={mapIco} className="ContactItemIco"/>
                                    <div className="ContactAddressLine">
                                        <div className="ContactAddressHeader">Мы здесь</div>
                                        <div className="ContactAddressSubheader">Приходите поздороваться в наш офис в штаб-квартире.</div>
                                        <Link href='https://maps.app.goo.gl/DAD5GYs13wJTyfug7' target="_blank" className="ContactAddressLink">Московское шоссе, 81А, Самара, Самарская обл. ТЦ. Парк Хаус</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="ContactAddressItem">
                                <div className="ContactAddressDescr">
                                    <Image alt="phoneIco" src={phoneIco} className="ContactItemIco"/>
                                    <div className="ContactAddressLine">
                                        <div className="ContactAddressHeader">Позвоните нам</div>
                                        <div className="ContactAddressSubheader">Понедельник - пятница с 8 утра до 17 вечера.</div>
                                        <Link href='tel:18337876473' className="ContactAddressLink">1-833-787-6473</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='ContactAddressForm'>
                        <h2 className="ContactHeader">Связаться с нами</h2>
                        <h3 className="ContactSubheader">Хотите нам что-то сказать? Вы можете отправить нам электронное письмо, используя эту форму, или просто пообщаться с нами в чате.</h3>
                        <div className='ContactAddressFormBlock'>
                            <input value={inputName} onChange={(event) => setInputName(event.target.value)} className='OpenOrderInput' placeholder='Ваше Имя'/>
                            <input value={inputEmail} onChange={(event) => setInputEmail(event.target.value)} className='OpenOrderInput' placeholder='Ваш Email'/>
                            <PhoneInput
                                className='OpenOrderInput OrderInputPhone'
                                defaultCountry="RU"
                                placeholder="+7 (999) 999 99 99"
                                initialValueFormat="national"
                                countrySelectProps={{ unicodeFlags: true }}
                                international
                                value={userPhone}
                                onChange={setUserPhone}/>
                            <TextareaAutosize 
                                className='OpenOrderInput' 
                                placeholder='Ваш вопрос'
                                value={inputMessage} 
                                onChange={(event) => setInputMessage(event.target.value)}
                                style={{padding: '1rem 0'}}
                                />
                            <div className='ContactAddressFormActions'>
                                <div className='ContactAddressFormReturn' onClick={()=>{setInputEmail(''), setInputName(''), setInputMessage(''), setUserPhone('')}}><i class="fa-solid fa-arrow-rotate-left"></i> Сбросить</div>
                                <div className='Button ButtonOrder'>Отправить</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}