'use client'
import Link from "next/link"
import './PrivatePolicyBlock.sass'
import { useEffect, useState } from "react"

export default function PrivatePolicyBlock(props){

    
    return(
        <div className="PrivatePolicyBlock">
            <ul className="PrivatePolicyBlockWrapper">
                <li><Link className={`PrivatePolicyBlockLink ${props.confidentialityStatus}`} href='/private-policy/confidentiality'>Политика конфиденциальности <div className="PrivacyItemChevron">{'>'}</div></Link></li>
                <li><Link className={`PrivatePolicyBlockLink ${props.serviceStatus}`} href='/private-policy/service'>Условия обслуживания <div className="PrivacyItemChevron">{'>'}</div></Link></li>
                <li><Link className={`PrivatePolicyBlockLink ${props.refundStatus}`} href='/private-policy/refund'>Политика возврата <div className="PrivacyItemChevron">{'>'}</div></Link></li>
                <li className="HelpMore">Не нашли то что искали?</li>
                <li className="HelpMoreItem"><Link href='/contacts' className="HelpMoreBtn"><div><span>?</span> Контакты</div><div className="PrivacyItemChevron">{'>'}</div></Link></li>
            </ul>
        </div>
    )
}