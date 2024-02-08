'use client'
import { useEffect, useState } from 'react'
import './style.sass'
export default function AdminPage(){
    const [orders, setOrders] = useState([])
    const [orderStatus, setOrderStatus] = useState('')
    function getOrders(){
        fetch('/api/open-order')
        .then((res)=>res.json())
        .then((orders)=>{
            setOrders(orders)
        })
    }
    useEffect(()=>{
        getOrders()
    }, [])
    async function orderState(number){
        await fetch(`/api/open-order?id=${number}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( { OrderStatus: orderStatus } )
        })
        .then(
            response => response.json(),
            alert("Статус изменен"),
            window.location.reload()
        )
        .catch(error => {
            alert("Ошибка")
            console.error(error)
        })
    }
    return(
        <div className="AdminPage">
            <div className="container">
                <table>
                    <tr>
                        <th>Номер Заказа</th>
                        <th>Id Пользователя</th>
                        <th>Артикул</th>
                        <th>Имя</th>
                        <th>Фамилия</th>
                        <th>Email</th>
                        <th>Телефон</th>
                        <th>Страна</th>
                        <th>Город</th>
                        <th>Улица</th>
                        <th>Дом</th>
                        <th>Квартира</th>
                        <th>Статус Заказа</th>
                    </tr>
                    {orders.map(OrderItem=>(
                        <tr style={OrderItem.OrderStatus === 'Создан' ? {background: "red", color: "#fff"} : OrderItem.OrderStatus === 'На выдачу' ? {background: "#99ff00"} : OrderItem.OrderStatus === 'Выдано' ? {background: "green"} : {background: "yellow"}}>
                            <td>{OrderItem.id}</td>
                            <td>{OrderItem.UserId}</td>
                            <td>{OrderItem.UserOrder}</td>
                            <td>{OrderItem.UserName}</td>
                            <td>{OrderItem.UserSurname}</td>
                            <td>{OrderItem.UserEmail}</td>
                            <td>{OrderItem.UserPhone}</td>
                            <td>{OrderItem.UserCountry}</td>
                            <td>{OrderItem.UserCity}</td>
                            <td>{OrderItem.UserStreet}</td>
                            <td>{OrderItem.UserHouse}</td>
                            <td>{OrderItem.UserApartment}</td>
                            <td>
                                <select onChange={(event) => setOrderStatus(event.target.value)}>
                                    <option>{OrderItem.OrderStatus}</option>
                                    <option value="В обработке">В обработке</option>
                                    <option value="В пути">В пути</option>
                                    <option value="На выдачу">На выдачу</option>
                                    <option value="Выдано">Выдано</option>
                                    <option value="Отказ">Отказ</option>
                                </select>
                            </td>
                            <div className='Button ButtonOrder ApanelBtn' onClick={()=>{orderState(OrderItem.id)}}>Сохранить</div>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    )
}