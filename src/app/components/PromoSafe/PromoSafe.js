import Image from "next/image";
import Link from "next/link";
import ShieldIco from '/public/static/img/ico/PromoSafe/shield.svg'
import TruckIco from '/public/static/img/ico/PromoSafe/truck.svg'
import Dollar from '/public/static/img/ico/PromoSafe/dollar.svg'
import PhoneCall from '/public/static/img/ico/PromoSafe/phone-call.svg'
import './PromoSafe.sass'

export default function PromoSafe(){
    return(
        <div className="PromoSafe">
            <div className="container">
                <div className="SectionHeader">
                    <div className="PageSubHeader">Безопасность</div>
                </div>
                <div className="PromoSafeItems">
                    <div className="PromoSafeItem">
                        <Image alt="Shield" className="PromoSafeItemImage" src={ShieldIco}/>
                        <div className="PromoSafeItemDescr">
                            Безопасные, защищенные, быстрые и проверенные каналы оплаты
                        </div>
                    </div>
                    <div className="PromoSafeItem">
                        <Image alt="Truck" className="PromoSafeItemImage" src={TruckIco}/>
                        <div className="PromoSafeItemDescr">
                            Безопасные, защищенные, быстрые и проверенные каналы оплаты
                        </div>
                    </div>
                    <div className="PromoSafeItem">
                        <Image alt="Dollar" className="PromoSafeItemImage" src={Dollar}/>
                        <div className="PromoSafeItemDescr">
                            Гарантия возврата денег на 30 дней + легкий возврат
                        </div>
                    </div>
                    <div className="PromoSafeItem">
                        <Image alt="PhoneCall" className="PromoSafeItemImage" src={PhoneCall}/>
                        <div className="PromoSafeItemDescr">
                            Есть какие-либо вопросы? у нас есть служба поддержки звонков для всех <br/> <Link className="PromoSafeItemDescrLink" href='/'>Связаться с нами</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}