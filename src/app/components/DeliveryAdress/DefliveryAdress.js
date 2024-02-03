'use client'
import Link from 'next/link'
import './DeliveryAdress.sass'
import PhoneInput from 'react-phone-number-input'
import { useEffect, useState } from 'react'
import GetUser from '../../configFiles/MysqlRequests/requestfile'
import { useCookies } from 'react-cookie'

export default function DeliveryAdress(props){
    const [userEmail, setUserEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [userSurname, setUserSurname] = useState('')
    const [userCountry, setUserCountry] = useState('')
    const [userCity, setUserCity] = useState('')
    const [userStreet, setUserStreet] = useState('')
    const [userHouse, setUserHouse] = useState('')
    const [userApartment, setUserApartment] = useState('')
    const [userPhone, setUserPhone] = useState('')
    const [checkboxState, setCheckboxState] = useState(false)

    const [cookies] = useCookies(['UserData'])
    const userData = cookies.UserData
    let UserId = userData.userId
    const data = GetUser(UserId)

    let setAccount = {
        UserName: userName,
        UserEmail: userEmail,
        UserSurname: userSurname,
        UserCountry: userCountry,
        UserCity: userCity,
        UserStreet: userStreet,
        UserHouse: userHouse,
        UserApartment: userApartment
    }


    function setUserSettingProfile() {
        if (checkboxState === true) {
            fetch(`/api/set?UserId=${UserId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(setAccount)
            })
            .then(
                response => response.json(),
                alert("Изменения применены"),
            )
            .catch(error => {
                console.error(error)
            })
        } else {
          null
        }
      }
    
    return(
        <div>
            <div className='OpenOrderDelivery'>
                <div className='OpenOrderDeliveryHeader'>Контактная Информация</div>
                <input className='OpenOrderInput' 
                    placeholder={data[0]?.UserEmail !== '' ? data[0]?.UserEmail :'Email'}
                    value={userEmail} onChange={(event) => setUserEmail(event.target.value)}
                />
                <div className='OpenOrderDeliveryHeader'>Адрес доставки</div>
                <select onChange={(event) => setUserCountry(event.target.value)} className='OpenOrderInput' id="Country">
                    <option value="">Выберите вашу страну</option>
                    <option value="Россия">Российская федерация</option>
                    <option value="Казахстан">Казахстан</option>
                    <option value="Белорусь">Белорусь</option>
                </select>
                <div className='OpenOrderUserItems'>
                    <input className='OpenOrderInput OpenOrderUserItem' 
                        placeholder={`Имя: ${data[0]?.UserName !== '' ? data[0]?.UserName : ''}`}
                        value={userName} onChange={(event) => setUserName(event.target.value)}
                    />
                    <input className='OpenOrderInput OpenOrderUserItem' 
                        placeholder={`Фамилия: ${data[0]?.UserSurname !== '' ? data[0]?.UserSurname : ''}`}
                        value={userSurname} onChange={(event) => setUserSurname(event.target.value)}
                    />
                    <input className='OpenOrderInput OpenOrderUserItem' 
                        placeholder={`Город: ${data[0]?.UserCity !== '' ? data[0]?.UserCity : ''}`}
                        value={userCity} onChange={(event) => setUserCity(event.target.value)}
                    />
                    <input className='OpenOrderInput OpenOrderUserItem' 
                        placeholder={`Улица: ${data[0]?.UserStreet !== '' ? data[0]?.UserStreet : ''}`}
                        value={userStreet} onChange={(event) => setUserStreet(event.target.value)}
                    />
                    <input className='OpenOrderInput OpenOrderUserItem' 
                        placeholder={`Дом: ${data[0]?.UserHouse !== '' ? data[0]?.UserHouse : ''}`}
                        value={userHouse} onChange={(event) => setUserHouse(event.target.value)}
                    />
                    <input className='OpenOrderInput OpenOrderUserItem' 
                        placeholder={`Квартира: ${data[0]?.UserApartment !== '' ? data[0]?.UserApartment : 'Квартира'}`}
                        value={userApartment} onChange={(event) => setUserApartment(event.target.value)}
                    />
                </div>
                <PhoneInput
                    className='OpenOrderInput OrderInputPhone'
                    defaultCountry="RU"
                    placeholder="+7 (999) 999 99 99"
                    initialValueFormat="national"
                    countrySelectProps={{ unicodeFlags: true }}
                    international
                    value={userPhone}
                    onChange={setUserPhone}/>
            </div>
            <input id='saveDeliveryData' type='checkbox' onChange={() => setCheckboxState((state) => !state)}/> <label for='saveDeliveryData'>Сохранить данные</label>
            <div className='OpenOrderActions'>
                <Link href='/cart' className={`OpenOrderActionLink ${props.toBack}`}><i className="fa-solid fa-arrow-left"></i> Вернуться в корзину</Link>
                <div className='Button ButtonOrder' onClick={()=>{setUserSettingProfile()}}>{props.BtnDescr} <i className="arrowico fa-solid fa-arrow-right"></i></div>
            </div>
        </div>
    )
}