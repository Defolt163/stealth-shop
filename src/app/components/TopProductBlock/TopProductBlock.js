'use client'
import { useState } from 'react'
import './TopProductBlock.sass'
import Image from 'next/image'
import ScopeImage from '/public/static/img/scope2.png'
import RifleScope from '/public/static/img/rifle+scope.png'
import Binoculas from '/public/static/img/binocular.png'
import SettingsIco from '/public/static/img/ico/ProductInfo/settings.svg'
import Link from 'next/link'

export default function TopProductBlock(){
    const [dropdownStatus, setDropdownStatus] = useState('scope')
    function openDropdown(menuName){
        setDropdownStatus(menuName)
    }

    return(
        <div className="TopProductBlock">
            <div className="container">
                <div className="TopProductBlockWrapper">
                    <div className="TopProductBlockInfo">
                        <div className="TopProductBlockInfoHeader">Прозрачность</div>
                        <div className="TopProductBlockInfoDescr">Лучшее в области <span>высококачественного производства</span> и самых <span>передовых технологий</span> из когда-либо существовавших!</div>
                    </div>
                    <div className='TopProductInfoBlockProduct'>
                        <div className="TopProductBlockProduct">
                            <div 
                                className={`TopProductBlockProductItem ${dropdownStatus === 'scope' ? 'active' : ''}`}
                                onClick={() => openDropdown('scope')}
                            >
                                <div className='TopProductBlockProductItemInfo'>
                                    <div className="TopProductBlockProductItemNumber">01.</div>
                                    <div className="TopProductBlockProductItemName">Прицел</div>
                                </div>
                                <Link href='/product/1' className="TopProductBlockProductItemByNow">Купить сейчас</Link>
                            </div>
                            <div 
                                className={`TopProductBlockProductItem ${dropdownStatus === 'RifleScope' ? 'active' : ''}`}
                                onClick={() => openDropdown('RifleScope')}
                            >
                                <div className='TopProductBlockProductItemInfo'>
                                    <div className="TopProductBlockProductItemNumber">02.</div>
                                    <div className="TopProductBlockProductItemName">Прицел + Винтовка</div>
                                </div>
                                <Link href='/product/2' className="TopProductBlockProductItemByNow">Купить сейчас</Link>
                            </div>
                            <div 
                                className={`TopProductBlockProductItem ${dropdownStatus === 'Binoculas' ? 'active' : ''}`}
                                onClick={() => openDropdown('Binoculas')}
                            >
                                <div className='TopProductBlockProductItemInfo'>
                                    <div className="TopProductBlockProductItemNumber">03.</div>
                                    <div className="TopProductBlockProductItemName">Бинокль</div>
                                </div>
                                <Link href='/product/3' className="TopProductBlockProductItemByNow">Купить сейчас</Link>
                            </div>
                            <div 
                                className={`TopProductBlockProductItem ${dropdownStatus === 'otherproduct' ? 'active' : ''}`}
                                onClick={() => openDropdown('otherproduct')}
                            >
                                <div className='TopProductBlockProductItemInfo'>
                                    <div className="TopProductBlockProductItemNumber">04.</div>
                                    <div className="TopProductBlockProductItemName">Другое</div>
                                </div>
                                <div className="TopProductBlockProductItemByNow">Подробнее</div>
                            </div>
                        </div>
                        <div className='TopProductBlockProductImage'>
                                <Image alt="scope" className={`TopProductImage ${dropdownStatus === 'scope' ? 'active' : ''}`} src={ScopeImage}/>
                                <Image alt="scope+rifle" className={`TopProductImage RifleAndScope ${dropdownStatus === 'RifleScope' ? 'active' : ''}`} src={RifleScope}/>
                                <Image alt="binocular" className={`TopProductImage ${dropdownStatus === 'Binoculas' ? 'active' : ''}`} src={Binoculas}/>
                                <Image alt="gear" className={`TopProductImage Other ${dropdownStatus === 'otherproduct' ? 'active' : ''}`} src={SettingsIco}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}