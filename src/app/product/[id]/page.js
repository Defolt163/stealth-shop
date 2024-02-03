'use client'
import Image from 'next/image'
import './style.sass'
import database from '/src/app/assets/db_products.json'
import ratingStar from '/public/static/img/ico/ratingstar.svg'
import ReviewBlock from '../../components/ReviewBlock/ReviewBlock'
import ActualQuestion from '../../components/ActualQuestion/ActualQuestion'
import PromoSafe from '../../components/PromoSafe/PromoSafe'
import { useEffect, useState } from 'react'
import GetUser from '../../configFiles/MysqlRequests/requestfile'
import { useCookies } from 'react-cookie'

export default function ProductPage(){
    const [cookies] = useCookies(['UserData'])
    const userData = cookies.UserData
    let UserId = userData.userId
    const data = GetUser()
    const [modalStatus, setModalStatus] = useState('')
    const [productId, setProductId] = useState(null)
    const [productAddCartId, setProductAddCartId] = useState(null)

    const [pieceCount, setPieceCount] = useState(1);

    const decreasePieceCount = () => {
        if (pieceCount > 1) {
        setPieceCount(pieceCount - 1);
        }
    };

    const increasePieceCount = () => {
        setPieceCount(pieceCount + 1);
    };

    useEffect(() => {
        const getUrlParams = () => {
        const url = window.location.pathname;
        const parts = url.split('/');
        const id = parts[parts.length - 1]-1;
        setProductId(id);
        setProductAddCartId(id+1)
        };

        getUrlParams();
    }, []);




    
    // Получаем текущий массив cart из объекта userData
    const currentCart = data.UserCart || [];

    
            
    // Добавляем productId в текущий массив cart
    const updatedCart = [...currentCart, productAddCartId];
    function cartAdd() {
        fetch(`/api/data?UserId=${UserId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                UserCart: updatedCart
            })
        })
        .then(
            response => response.json(),
            alert("Добавлено")
        )
        .catch(error => {
            console.error(error)
        })
    }
        


    if (productId === null) {
        return(
            <>Загрузка</>
        );
      }
    
    const product = database[productId]
    const productImagePath = `${product.ProductImage}`

    return(
        <div className="ProductPage">
            <div className="ProductPagePromo">
                <div className='container'>
                    <div className='ProductPagePromoWrapper'>
                        <div className='ProductPagePromoHeaderWrapper'>
                            <div className='ProductPagePromoLogo'>Stealth Vision®</div>
                            <div className='ProductPagePromoHeader'>{product.ProductName}</div>
                        </div>
                        <div className='ProductImage' style={{background: `url(${productImagePath}) center center/contain no-repeat`}}></div>
                        <div className='ProductPagePromoInfoBlock'>
                            <div className='ProductPagePromoInfo'>
                                <div className='ProductPagePromoInfoItem ProductPagePromoInfoName'>Stealth Vision® {product.ProductName}</div>
                                <div className='ProductPagePromoInfoItem ProductPagePromoInfoRate'>
                                    <div className='ProductPagePromoInfoRatingStars'>
                                        {database[productId].ProductRate >= 5 && (
                                            Array(5).fill().map((_, index) => (
                                            <div key={index}><Image width='24' height='24' className="ProductCardRatingStar" src={ratingStar} /></div>
                                            ))
                                        )}
                                        {product.ProductRate >= 4 && product.ProductRate < 5 && (
                                            Array(4).fill().map((_, index) => (
                                            <div key={index}><Image width='24' height='24' className="ProductCardRatingStar" src={ratingStar} /></div>
                                            ))
                                        )}
                                        {product.ProductRate >= 3 && product.ProductRate < 4 && (
                                            Array(3).fill().map((_, index) => (
                                            <div key={index}><Image width='24' height='24' className="ProductCardRatingStar" src={ratingStar} /></div>
                                            ))
                                        )}
                                        {product.ProductRate >= 2 && product.ProductRate < 3 && (
                                            Array(2).fill().map((_, index) => (
                                            <div key={index}><Image width='24' height='24' className="ProductCardRatingStar" src={ratingStar} /></div>
                                            ))
                                        )}
                                        {product.ProductRate >= 0 && product.ProductRate < 2 && (
                                            Array(1).fill().map((_, index) => (
                                            <div key={index}><Image width='24' height='24' className="ProductCardRatingStar" src={ratingStar} /></div>
                                            ))
                                        )}
                                    </div>
                                    <div className='ProductPagePromoInfoRatingScore'>4.5 Rated • 25 Reviews</div>
                                </div>
                                <div className='ProductPagePromoInfoItem ProductPagePromoOtherInfo'>
                                    <div className='ProductPagePromoInfoFirst'>7 - 14 days</div>
                                    <div className='ProductPagePromoInfoSecond'>Delivery time</div>
                                </div>
                                <div className='ProductPagePromoInfoItem ProductPagePromoOtherInfo'>
                                    <div className='ProductPagePromoInfoFirst'>$ {(product.ProductPrice * pieceCount).toFixed(3)}</div>
                                    <div className='ProductPagePromoInfoSecond'>Per Piece</div>
                                </div>
                            </div>
                            <div className='ProductPagePromoInfoAction'>
                                <div className='ProductPagePromoInfoActionItem ProductPagePromoInfoPiceBlock'>
                                    <div className='PiceIteration' onClick={decreasePieceCount}>-</div>
                                    <div className='PieceCount'>{pieceCount}</div>
                                    <div className='PiceIteration' onClick={increasePieceCount}>+</div>
                                </div>
                                <div className='ProductPagePromoInfoActionItem Button ButtonPromo' onClick={()=>{setModalStatus('active')}}>Купить</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ProductDescription'>
                <div className='container'>
                    <div className='ProductDescrHeader'>Описание</div>
                    <div className='ProductDescr'>
                        {product.ProductDescr}
                    </div>
                </div>
            </div>
            <div className='ProductTable'>
                <div className='container'>
                    <div className="SectionHeader">
                        <div className="PageSubHeader">Конкретные параметры.</div>
                    </div>
                    <div className='ProductTableWrapper'>
                        <table className='table-product'>
                            <tr><th>Stealth Vision 5-30x56</th><th>Low power</th><th>High power</th><th>Tolerance</th></tr>
                            <tr><td>Nominal Power</td><td>{product.ProductParameters.NominalPower.LowPower}</td><td>{product.ProductParameters.NominalPower.HighPower}</td><td>{product.ProductParameters.NominalPower.Tolerance}</td></tr>
                            <tr><td>Actual Power</td><td>{product.ProductParameters.ActualPower.LowPower}</td><td>{product.ProductParameters.ActualPower.HighPower}</td><td>{product.ProductParameters.ActualPower.Tolerance}</td></tr>
                            <tr><td>Effective Objective Diameter</td><td>{product.ProductParameters.EffectiveObjectiveDiameter.LowPower}</td><td>{product.ProductParameters.EffectiveObjectiveDiameter.HighPower}</td><td>{product.ProductParameters.EffectiveObjectiveDiameter.Tolerance}</td></tr>
                            <tr><td>Exit Pupil</td><td>{product.ProductParameters.ExitPupil.LowPower}</td><td>{product.ProductParameters.ExitPupil.HighPower}</td><td>{product.ProductParameters.ExitPupil.Tolerance}</td></tr>
                            <tr><td>Actual FOV</td><td>{product.ProductParameters.ActualFOV.LowPower}</td><td>{product.ProductParameters.ActualFOV.HighPower}</td><td>{product.ProductParameters.ActualFOV.Tolerance}</td></tr>
                        </table>
                    </div>
                </div>
            </div>
            <ReviewBlock/>
            <ActualQuestion/>
            <PromoSafe/>
            <div className={`ProductOrderModal ${modalStatus}`}>
                <div className='ProductOrderModalWrapper'>
                    <i onClick={()=>{setModalStatus('')}} className="ProductOrderModalCloser fa-solid fa-x"></i>
                    <div className='ProductOrderModalHeader'>{product.ProductName}</div>
                    <ul className='ProductOrderModalInfo'>
                        <li className='ProductOrderModalInfoItem'>Количество: {pieceCount}</li>
                        <li className='ProductOrderModalInfoItem'>Цена: {(product.ProductPrice * pieceCount).toFixed(3)}$</li>
                    </ul>
                    <div className='ProductOrderModalActions'>
                        <div className='ProductOrderModalAction' onClick={()=>{cartAdd()}}>
                            <i className="ProductOrderModalActionIco fa-solid fa-cart-plus"></i>
                            <div className='ProductOrderModalActionDescr'>В корзину</div>
                        </div>
                        <div className='ProductOrderModalAction'>
                            <i className="ProductOrderModalActionIco fa-regular fa-file"></i>
                            <div className='ProductOrderModalActionDescr'>Оформить заказ</div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}