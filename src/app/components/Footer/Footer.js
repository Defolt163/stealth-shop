import Link from "next/link";
import './Footer.sass'
export default function Footer(){
    return(
        <div className="Footer">
            <div className="container">
                <div className="FooterWrapper">
                    <div className="FooterItem">© 2023, Stealth Vision®</div>
                    <Link className="FooterItem" href='/private-policy/confidentiality'>Политика конфиденциальности</Link>
                    <Link className="FooterItem" href='/private-policy/refund'>Возврат</Link>
                    <Link className="FooterItem" href='/private-policy/service'>Гарантия</Link>
                </div>
            </div>
        </div>
    )
}