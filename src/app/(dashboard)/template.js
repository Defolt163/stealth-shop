'use client'
import { useCookies } from "react-cookie";
import AccountMenu from "../components/AccountMenu/AccountMenu";
import './style.sass'
import { useRouter } from "next/navigation";

export default function Template({ children }) {
    const router = useRouter()
    const [cookies] = useCookies(['UserData'])
    const userData = cookies.UserData
    if (userData?.logginin === true) {
        return (
          <div className="Dashboard">
            <div className="container">
              <div className="DashboardWrapper">
                <AccountMenu className="AccountMenu" />
                <div className="AccountInfo">{children}</div>
              </div>
            </div>
          </div>
        );
      } else if (typeof window !== 'undefined') {
        router.push('/login')
      }
  }