'use client'
import AccountSettings from "../../components/AccountSettings/AccountSettings";
import './account.sass'

export default function ProfilePage() {

  return (
    <div className="ProfilePage">
        <div className="PageHeader">Мой Аккаунт</div>
        <div className="ProfilePageWrapper">
            <div className="PageInfo">
                <AccountSettings/> 
          </div>
        </div>
    </div>
  );
}