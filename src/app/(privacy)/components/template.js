'use client'
import Link from "next/link";
import PrivatePolicyBlock from "../../components/PrivatePolicyBlock/PrivatePolicyBlock";
import '../style.sass'
import '../private-policy/style.sass'
import { useEffect, useState } from "react"

export default function TemplateDash ({ children, pageheader, refundStatus, confidentialityStatus, serviceStatus }) {

    return (
        <div className="PrivatePolicy">
            <div className="container">
                <div className='OpenOrderPageLinks'>
                    <Link href='/' className='OpenOrderPageLink'>Домой</Link> {`> `} 
                    <Link href='/private-policy/confidentiality' className='active OpenOrderPageLink'>Справочник</Link>
                </div>
                <h2 className="PrivatePolicyHeader">{pageheader}</h2>
                <div className="PrivatePolicyWrapper">
                    <PrivatePolicyBlock confidentialityStatus={confidentialityStatus} serviceStatus={serviceStatus} refundStatus={refundStatus}/>
                    <div className="PolicyBlock">{children}</div>
                </div>
            </div>
        </div>
        
    ) 
}