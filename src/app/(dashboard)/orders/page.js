'use client'
import { useEffect, useState } from "react"
import './style.sass'
import { useCookies } from "react-cookie"
import productDB from '/src/app/assets/db_products.json'

export default function OrderPage(){
    const [cookies] = useCookies(['UserData'])
    const userData = cookies.UserData
    let UserId = userData.userId
    
    

    const [orders, setOrders] = useState([])
    function getOrders(){
        fetch(`/api/get-orders?UserId=${UserId}`)
            .then((res) => res.json())
            .then((orders) => {
                setOrders(orders);
            })
            .catch((error) => {
                console.error(error);
            });
    }
    useEffect(()=>{
        getOrders()
    }, [])
    return(
        <div className="UserOrders">
            <div className="container">
                <table>
                    <tr>
                        <th>Номер Заказа</th>
                        <th>Товар</th>
                        <th>Статус Заказа</th>
                    </tr>
                    {orders.map(OrderItem=>(
                        <tr>
                            <td>{OrderItem.id}</td>
                            <td>{productDB[(OrderItem.UserOrder - 1)].ProductName}</td>
                            <td>{OrderItem.OrderStatus}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    )
}