'use client'
import { useCookies } from "react-cookie";
import './style.sass'
import { useRouter } from "next/navigation";
import CostBreakup from "../components/CostBreakup/CostBreakup";

export default function TemplateDash ({ children }) {
    const router = useRouter()
    const [cookies] = useCookies(['UserData'])
    const userData = cookies.UserData


    return (
        userData?.logginin === true ? (
            <div className="Dashboard">
                <div className="container">
                    <div className="DashboardWrapper">
                        <div className="OrderInfo">{children}</div>
                        <CostBreakup/>
                    </div>
                </div>
            </div>
        ) : router.push('/login')
        
    ) 
}