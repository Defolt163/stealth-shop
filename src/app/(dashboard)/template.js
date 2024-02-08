'use client'
import { useCookies } from "react-cookie";
import './style.sass'
import { useRouter } from "next/navigation";
import dynamic from 'next/dynamic'


export default function Template({ children }) {
    const router = useRouter()
    const [cookies] = useCookies(['UserData'])
    const userData = cookies.UserData
    
    const AccountMenu = dynamic(() => import('../components/AccountMenu/AccountMenu'), { ssr: false })
    if (userData?.logginin) {
        return (
          <div className="Dashboard">
            <div className="container">
              <div className="DashboardWrapper">
                <AccountMenu className="AccountMenu" suppressHydrationWarning/>
                <div className="AccountInfo">{children}</div>
              </div>
            </div>
          </div>
        );
      } else if (typeof window !== 'undefined') {
        router.push('/login')
      }
  }