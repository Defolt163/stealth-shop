import OtherPageSubheader from "../components/OtherPageSubheader/OtherPageSubheader";
import PromoSafe from "../components/PromoSafe/PromoSafe";
import './about.sass'
import AboutDescr from "./components/AboutDescr/AboutDescr";

export default function AboutPage(){
    return(
        <div className="About">
            <div className="AboutPromo">
                <OtherPageSubheader about='active'/>
                <div className="container">
                    <div className="AboutPromoWrapper">
                        <div className="AboutPromoBgNumbers">
                            <span>01</span>
                            <span>02</span>
                            <span>03</span>
                            <span>04</span>
                            <span>05</span>
                            <span>06</span>
                            <span>07</span>
                            <span>08</span>
                            <span>09</span>
                        </div>
                        <div className="AboutPromoPoster">
                            <div className="InventorBlock">
                                <div className="InventorName">John</div>
                                <div className="InventorSurname">McCall</div>
                            </div>
                            <div className="InventorImage"></div>
                            <div className="InventorCircle"></div>
                            <div className="InventorLine"></div>
                            <div className="InventorState"><span>Inventor</span><span>Stealth Vision®</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <AboutDescr/>
            </div>
            <PromoSafe/>
        </div>
    )
}