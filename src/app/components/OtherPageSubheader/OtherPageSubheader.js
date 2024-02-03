import Link from "next/link";
import './OtherPageSubheader.sass'

export default function OtherPageSubheader(props){
    return(
        <div className="OtherPageSubheader">
            <div className="container">
                <div className="OtherPageSubheaderWrapper">
                    <ul className="OtherPageSubheaderList">
                        <li className={`OtherPageSubheaderListItem ${props.about}`}><Link className="OtherPageSubheaderListItemLink" href='/about'>О нас</Link></li>
                        <li className={`OtherPageSubheaderListItem ${props.faq}`}><Link className="OtherPageSubheaderListItemLink" href='/helpful'>Помощь</Link></li>
                        <li className={`OtherPageSubheaderListItem ${props.blog}`}><Link className="OtherPageSubheaderListItemLink" href='/'>Ресурсы</Link></li>
                        <li className={`OtherPageSubheaderListItem ${props.contacts}`}><Link className="OtherPageSubheaderListItemLink" href='/'>Контакты</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}