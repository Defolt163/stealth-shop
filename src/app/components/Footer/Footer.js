import Link from "next/link";
import './Footer.sass'
export default function Footer(){
    return(
        <div className="Footer">
            <div className="container">
                <div className="FooterWrapper">
                    <div className="FooterItem">© 2023, Stealth Vision®</div>
                    <Link className="FooterItem" href='/'>Политика конфиденциальности</Link>
                    <Link className="FooterItem" href='/'>Ресурсы</Link>
                    <Link className="FooterItem" href='/'>Возврат</Link>
                    <Link className="FooterItem" href='/'>Партнерство</Link>
                </div>
            </div>
        </div>
    )
}