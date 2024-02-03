'use client'
import { Input } from "reactstrap";
import './AccountSettings.sass'
import GetUser from "../../configFiles/MysqlRequests/requestfile";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";

export default function AccountSettings() {
    const [cookies] = useCookies(['UserData'])
    const userData = cookies.UserData
    let UserId = userData.userId
    const data = GetUser(UserId) 

    const [userEmail, setUserEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [userSurname, setUserSurname] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userNewPassword, setUserNewPassword] = useState('')
    const [userConfirmNewPassword, setUserConfirmNewPassword] = useState('')

    let setAccount = {
        UserName: userName,
        UserEmail: userEmail,
        UserSurname: userSurname,
        UserPassword: userNewPassword
    }
    

    function setUserSettingProfile() {
        if (userPassword === '' && userNewPassword === '' && userConfirmNewPassword === "") {
            fetch(`/api/set?UserId=${UserId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(setAccount)
            })
            .then(
                response => response.json(),
                alert("Изменения применены"),
                window.location.reload()
            )
            .catch(error => {
                console.error(error)
            })
        } else {
          userPassword !== data[0].UserPassword ? alert("Вы ввели неверный пароль аккаунта") :
          userNewPassword !== userConfirmNewPassword ? alert("Пароли не совпадают") :
          fetch(`/api/set?UserId=${UserId}`, {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(setAccount)
          })
          .then(
              response => response.json(),
              alert("Изменения применены"),
              window.location.reload()
          )
          .catch(error => {
              console.error(error)
          })
        }
      }




    return(
        <div className="AccountSettings">
            <div className="AccountSettingsWrapper">
                <div className="PageSubHeader PageSubHeaderCart">Контактные данные</div>
                <div className="AccountSettingsProfileInfo">
                    <div className="InputItem">
                        <div placeholder="Имя" className="InputName">Имя</div>
                        <Input 
                            className="AccountInput" 
                            placeholder={`Ваше Имя: ${data && data.length > 0 ? data[0]?.UserName : ''}`}
                            value={userName} onChange={(event) => setUserName(event.target.value)}
                            />
                    </div>
                    <div className="InputItem">
                        <div className="InputName">Фамилия</div>
                        <Input 
                            className="AccountInput" 
                            placeholder={`Ваша Фамилия: ${data && data.length > 0 ? data[0]?.UserSurname : ''}`}
                            value={userSurname} onChange={(event) => setUserSurname(event.target.value)}
                            />
                    </div>
                    <div className="InputItem">
                        <div className="InputName">Email</div>
                        <Input 
                            className="AccountInput" 
                            placeholder={`Ваш Email: ${data && data.length > 0 ? data[0]?.UserEmail : ''}`}
                            type="email"
                            value={userEmail} onChange={(event) => setUserEmail(event.target.value)}
                            />
                    </div>
                </div>
                <div className="PageSubHeader PageSubHeaderCart">Настройки пароля</div>
                <div className="AccountSettingsProfileInfo">
                    <div className="InputItem">
                        <div className="InputName">Старый пароль</div>
                        <Input 
                        className="AccountInput" 
                        type="password"
                        value={userPassword} onChange={(event) => setUserPassword(event.target.value)}
                        />
                    </div>
                    <div className="InputItem">
                        <div className="InputName">Новый пароль</div>
                        <Input 
                        className="AccountInput" 
                        type="password" minlength="8"
                        value={userNewPassword} onChange={(event) => setUserNewPassword(event.target.value)}
                        />
                    </div>
                    <div className="InputItem">
                        <div className="InputName">Повторите новый пароль</div>
                        <Input 
                        className="AccountInput" 
                        type="password" minlength="8"
                        value={userConfirmNewPassword} onChange={(event) => setUserConfirmNewPassword(event.target.value)}
                        />
                    </div>
                    <div className="SetPasswordButton" onClick={()=>{setUserSettingProfile()}}>Сохранить изменения</div>
                </div>
            </div>
        </div>
    )
}