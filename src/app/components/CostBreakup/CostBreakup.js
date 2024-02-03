'use client'
import Link from 'next/link'
import './CostBreakup.sass'
import { useCookies } from 'react-cookie'
import GetUser from '../../configFiles/MysqlRequests/requestfile'
import productDB from '../../assets/db_products.json'
import { useEffect, useState } from 'react'
export default function CostBreakup(){
    const [cookies] = useCookies(['UserData'])
    const userData = cookies.UserData
    let UserId = userData.userId
    const data = GetUser(UserId)
    const [checkboxState, setCheckboxState] = useState('')

    let CartPrice = data[0]?.UserCart
    let TotalPrice = CartPrice ? productDB[CartPrice].ProductPrice : 0
    let SplitMode = (TotalPrice/4).toFixed(3)


    return(
        <div className="CostBreakup">
            <h3 className="CostBreakupHeader">Оформление заказа</h3>
            <div className="CostBreakupCounting">
                <div className="CostBreakupCountingItem">
                    <div className="CostBreakupCountingTotal">Итого:</div>
                    <div className="CostBreakupCountingText">$ {TotalPrice}</div>
                </div>
                <div className="CostBreakupCountingItem">
                    <div className="CostBreakupCountingText">Количество:</div>
                    <div className="CostBreakupCountingText">5</div>
                </div>
                <div className="CostBreakupCountingItem">
                    <div className="CostBreakupCountingText">Промокод</div>
                    <div className="CostBreakupCountingText CostBreakupCountingTextPromo">Добавить промокод</div>
                </div>
                <div className="CostBreakupCountingItem">
                    <div className="CostBreakupCountingText">Доставка</div>
                    <div className="CostBreakupCountingText">$ 30</div>
                </div>
                <div className="CostBreakupCountingSplitPay">
                    <div className="CostBreakupCountingItem">
                        <div className="CostBreakupCountingText">Разбиение платежей</div>
                        {/* <input type="checkbox"/> */}
                        <label class="TogglerWrapper">
                            <input className='TogglerChecker' onChange={() => setCheckboxState((prevState) => prevState === "active" ? "" : "active")} type="checkbox" />
                            <div class="TogglerSlider">
                                <div class="TogglerKnob"></div>
                            </div>
                        </label>
                    </div>
                    <div className="CostBreakupCountingSplitPayCalendar">
                        <div className={`CostBreakupCountingSplitPayCalendarItem ${checkboxState}`}>
                            <div className="Mouth">mar</div>
                            <div className="Price">{SplitMode}$</div>
                        </div>
                        <div className={`CostBreakupCountingSplitPayCalendarItem ${checkboxState}`}>
                            <div className="Mouth">mar</div>
                            <div className="Price">{SplitMode}$</div>
                        </div>
                        <div className={`CostBreakupCountingSplitPayCalendarItem ${checkboxState}`}>
                            <div className="Mouth">mar</div>
                            <div className="Price">{SplitMode}$</div>
                        </div>
                        <div className={`CostBreakupCountingSplitPayCalendarItem ${checkboxState}`}>
                            <div className="Mouth">mar</div>
                            <div className="Price">{SplitMode}$</div>
                        </div>
                    </div>
                </div>
                <div className="CostBreakupCountingItem">
                    <div className="CostBreakupCountingTotal">Итого:</div>
                    <div className="CostBreakupCountingText">$ {checkboxState === 'active' ? SplitMode : TotalPrice}</div>
                </div>
            </div>
            <div className='AgreePolicy'>Продолжая, вы соглашаетесь с <Link href="/" className='AgreePolicyLink'>Условиями предоставления услуг</Link>, а также с <Link href="/" className='AgreePolicyLink'>Условиями продажи</Link>.</div>
        </div>
    )
}