import Link from 'next/link'
import './WhyStealthVision.sass'
import Image from 'next/image'
import greenDot from '/public/static/img/ico/dot.svg'
import scope from '/public/static/img/ico/circle.svg'
import calendar from '/public/static/img/ico/calendar.svg'
import box from '/public/static/img/ico/box.svg'


export default function WhyStealthVision(){
    return(
        <div className="WhyStealthVision">
            <div className="container">
                <div className="SectionHeader">
                    <div className="PageSubHeader">Почему именно Stealth Vision?</div>
                    <Link className="PageSubHeaderLink" href='/'>Узнайте о нас больше</Link>
                </div>
                <div className='WhyStealthVisionWrapper'>
                    <div className='WhyStealthVisionItem'>
                        <Image src={greenDot} className='WhyStealthVisionItemIco' alt='Зеленая точка'/>
                        <div className='WhyStealthVisionItemDescr'>Технология защиты от блика зеленым светом</div>
                    </div>
                    <div className='WhyStealthVisionItem'>
                        <Image src={scope} className='WhyStealthVisionItemIco' alt='Перекрестие'/>
                        <div className='WhyStealthVisionItemDescr'>Точность до 1000+ ярдов</div>
                    </div>
                    <div className='WhyStealthVisionItem'>
                        <Image src={calendar} className='WhyStealthVisionItemIco' alt='Календарь'/>
                        <div className='WhyStealthVisionItemDescr'>Более 40 лет офтальмологической практики</div>
                    </div>
                    <div className='WhyStealthVisionItem'>
                        <Image src={box} className='WhyStealthVisionItemIco' alt='Коробка'/>
                        <div className='WhyStealthVisionItemDescr'>Бесшумные, но мощные скандинавские компоненты</div>
                    </div>
                </div>
            </div>
        </div>
    )
}