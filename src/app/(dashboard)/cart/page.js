'use client'
import { useCookies } from "react-cookie"
import GetUser from "../../configFiles/MysqlRequests/requestfile"
import productDB from '../../assets/db_products.json'
import './cart.sass'
import Link from "next/link"

export default function CartPage(){
    const [cookies] = useCookies(['UserData'])
    const userData = cookies.UserData
    let UserId = userData.userId
    const data = GetUser(UserId)

    let CartItem = data[0]?.UserCart
    let cartItem = productDB[parseInt(CartItem) - 1]
    async function removeFromCart() {
        await fetch(`/api/data?UserId=${UserId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ UserCart: -1})
        })
        alert("Удалено")
    }
    return(
        <div className="CartPage">
            {cartItem && cartItem.ProductName !== '' ? 
                (<div className="CartItem">
                    <Link href={`/product/${cartItem.id}`} className="CartItemWrapper">
                        <div className="CartItemImage" style={{background: `url(${cartItem.ProductImageCard}) center center/cover no-repeat`}}></div>
                        <div>
                            <div className="CartItemHeader">{cartItem.ProductName}</div>
                            <div className="CartItemCount">Количество: 1</div>
                        </div>
                    </Link>
                    <div className="CartItemDel" onClick={()=>{removeFromCart()}}><i className="fa-solid fa-trash"></i></div>
                </div>)
            : <div>Здесь пока ничего нет</div>}
        </div>
    )
}