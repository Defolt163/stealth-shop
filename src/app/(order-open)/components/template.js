'use client'
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import '../style.sass'
import CostBreakup from "../../components/CostBreakup/CostBreakup";
import { useRouter } from 'next/navigation'

export default function TemplateDash ({ children }) {
    const router = useRouter()
    const [cookies] = useCookies(['UserData'])
    const userData = cookies.UserData

    if (userData?.logginin === true) {
        return (
                <div className="Dashboard">
                    <div className="container">
                        <div className="DashboardWrapper">
                            <div className="OrderInfo">{children}</div>
                            <CostBreakup/>
                        </div>
                    </div>
                </div>
            )}else if (typeof window !== 'undefined') {
                router.push('/login')
            }
        
    
}