'use client'
import Link from "next/link";
import './FuturedProducts.sass'
import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";
import cardDB from '/src/app/assets/db_products.json'
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";

export default function FuturedProducts(){

    let [items, setItems] = useState([])
    useEffect(() => {
        setItems(cardDB)
    }, []);

    const item = 
        cardDB.map((ProductItem) => (
            <ProductCard
                key={ProductItem.id}
                ProductLink={ProductItem.id}
                ProductCardId={ProductItem.id}
                ProductImage={ProductItem.ProductImageCard}
                ProductCardName={ProductItem.ProductName}
                ProductCardPrice={ProductItem.ProductPrice}
                ProductCardVariant={ProductItem.ProductOption}
                ProductRate={ProductItem.ProductRate}
            />
        ))
        cardDB.map((ProductItem) => (
            <ProductCard
                key={ProductItem.id}
                ProductLink={ProductItem.id}
                ProductCardId={ProductItem.id}
                ProductImage={ProductItem.ProductImageCard}
                ProductCardName={ProductItem.ProductName}
                ProductCardPrice={ProductItem.ProductPrice}
                ProductCardVariant={ProductItem.ProductOption}
                ProductRate={ProductItem.ProductRate}
            />
        ))

    const responsive = {
        0: { items: 2 },
        568: { items: 3},
        992: { items: 3 },
        1024: { items: 4, itemsFit: 'contain' },
    };


    return(
        <div className="FuturedProducts">
            <div className="container">
                <div className="SectionHeader">
                    <div className="PageSubHeader">Рекомендации</div>
                    <Link className="PageSubHeaderLink" href='/'>Посмотреть больше</Link>
                </div>
                <div className="FuturedProductsBlock">
                    <AliceCarousel mouseTracking items={item} autoPlayInterval={1000} responsive={responsive} infinite={true}/>
                </div>
            </div>
        </div>
    )
}