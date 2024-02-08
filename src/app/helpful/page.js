import './style.sass'
import OtherPageSubheader from "../components/OtherPageSubheader/OtherPageSubheader";
import ActualQuestion from '../components/ActualQuestion/ActualQuestion';
import Image from 'next/image';
import bgObjRings from '/public/static/img/bg-object-ring-circle.svg'
import bgObjOtherRings from '/public/static/img/bg-object-more-rings.svg'

export default function HelpfulPage(){
    return(
        <div className="Helpful">
            <OtherPageSubheader faq='active'/>
            <div className="HelpfulPromo">
                <Image alt="rings" className='BgObjImage BgRingCircle' src={bgObjRings}/>
                <Image alt="rings" className='BgObjImage BgOtherRings' src={bgObjOtherRings}/>
                <div className="container">
                    <div className="HelpfulPromoWrapper">
                        <div className="HelpfulPromoHeader">Часто задаваемые вопросы</div>
                        <div className="HelpfulPromoSubheader">Есть вопросы? Мы здесь, чтобы помочь.</div>
                        <input className="OtherPagesInput" placeholder="Как мы можем помочь?"/>
                    </div>
                </div>
            </div>
            <ActualQuestion/>
        </div>
    )
}