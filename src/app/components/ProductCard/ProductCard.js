import Image from "next/image";
import ratingStar from '/public/static/img/ico/ratingstar.svg'
import './ProductCard.sass'
import Link from "next/link";

export default function ProductCard(props){
    return(
        <Link href={`/product/${props.ProductLink}`} key={props.ProductCardId} className="ProductCard">
            <div className="ProductCardWrapper">
                <div className="ProductCardImage" style={{backgroundImage: `url(${props.ProductImage})`}}></div>
                <div className="ProductCardInfo">
                    <div className="ProductCardHeader">
                        <div className="ProductCardHeaderWrapper">
                            <div className="ProductCardName">{props.ProductCardName}</div>
                            <div className="ProductCardPrice">От {props.ProductCardPrice} ₽</div>
                        </div>
                        <div>{props.ProductCardVariant <= 1 ? null : <span className="ProductCardOptions">{props.ProductCardVariant} Варианта</span>}</div>
                    </div>
                    <div className="ProductCardRating">
                        {props.ProductRate >= 5 && (
                            Array(5).fill().map((_, index) => (
                            <div key={index}><Image className="ProductCardRatingStar" src={ratingStar} /></div>
                            ))
                        )}
                        {props.ProductRate >= 4 && props.ProductRate < 5 && (
                            Array(4).fill().map((_, index) => (
                            <div key={index}><Image className="ProductCardRatingStar" src={ratingStar} /></div>
                            ))
                        )}
                        {props.ProductRate >= 3 && props.ProductRate < 4 && (
                            Array(3).fill().map((_, index) => (
                            <div key={index}><Image className="ProductCardRatingStar" src={ratingStar} /></div>
                            ))
                        )}
                        {props.ProductRate >= 2 && props.ProductRate < 3 && (
                            Array(2).fill().map((_, index) => (
                            <div key={index}><Image className="ProductCardRatingStar" src={ratingStar} /></div>
                            ))
                        )}
                        {props.ProductRate >= 0 && props.ProductRate < 2 && (
                            Array(1).fill().map((_, index) => (
                            <div key={index}><Image className="ProductCardRatingStar" src={ratingStar} /></div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </Link>
    )
}