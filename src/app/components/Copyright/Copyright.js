import './Copyright.sass'
import Image from "next/image";
import scopeGreen from '/public/static/img/ico/scope-green.svg'
import scopeUnGreen from '/public/static/img/ico/scope-ungreen.svg'

export default function Copyright(){
    return(
        <div className="Copyright">
            <div className="container">
                <div className="CopyrightHeader">Stealth Vision обладает исключительными правами на эту технологию</div>
                <div className="CopyrightSubHeader">Поставляется с технологией green light, которая очень редкая в мире.</div>
                <div className="CopyrightTecBlock">
                    <div className="CopyrightTecItem">
                        <Image className='CopyrightTecIco' src={scopeGreen}/>
                        <div className="CopyrightTecHeader">Когда стрелять?</div>
                        <div className="CopyrightTecDescr">Если горит зеленая лампочка, вы можете нажать на спусковой крючок. <br/>
                        Если зеленая лампочка выключена, не стреляйте, повторно наведите ее на спусковой крючок.</div>
                    </div>
                    <div className="CopyrightTecItem">
                        <Image className='CopyrightTecIco' src={scopeUnGreen}/>
                        <div className="CopyrightTecHeader">Когда не стрелять?</div>
                        <div className="CopyrightTecDescr">Если вы наклоните его слишком сильно в одну или слишком далеко в другую сторону, чтобы выйти из зоны поражения на расстоянии тысячи ярдов, зеленый индикатор погаснет.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}