import Link from "next/link";
import './SubHeader.sass'

export default function SubHeader(){
    return(
        <div className="SubHeader">
            <div className="container">
                <div className="SubHeaderWrapper">
                    <div className="SubHeaderItem active" href='/'>Товары</div>
                    <Link className="SubHeaderItem" href='/about'>О нас</Link>
                    <Link className="SubHeaderItem" href='/helpful'>Помощь</Link>
                    <Link className="SubHeaderItem" href='/private-policy/service'>Гарантия</Link>
                    <Link className="SubHeaderItem" href='/contacts'>Контакты</Link>
                </div>
            </div>
        </div>
    )
}