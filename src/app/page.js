import Image from 'next/image'
import './global.sass'
import './MainPageStyle.sass'
import PlaneImage from '/public/static/img/plane.jpg'
import DegIco from '/public/static/img/ico/120deg.svg'
import PercentsIco from '/public/static/img/ico/87percent.svg'
import SearchIco from '/public/static/img/ico/search.svg'
import Link from 'next/link'
import SubHeader from './components/SubHeader/SubHeader'
import FuturedProducts from './components/FuturedProducts/FuturedProducts'
import WhyStealthVision from './components/WhyStealthVision/WhyStealthVision'
import TopProductBlock from './components/TopProductBlock/TopProductBlock'
import Copyright from './components/Copyright/Copyright'
import ReviewBlock from './components/ReviewBlock/ReviewBlock'
import ActualQuestion from './components/ActualQuestion/ActualQuestion'
import PromoSafe from './components/PromoSafe/PromoSafe'


export default function Home() {
  return (
    <div className='MainPage'>
      <section className='Promo'>
        <div className='container'>
          <div className='PromoWrapper'>
            <div className='PromoInfo'>
              <div className='PromoDescr'>Stealth Vision для тех, кто увлекается наблюдением за птицами, охотой и астрономией.</div>
              <Link href='/' className='Button ButtonPromo'>Подробнее <span>→</span></Link>
            </div>
            <div className='PromoImageBlock'>
              <div className='plus'></div>
              <div className='PromoImageLine PromoImageLineFirst'>
                <Image className='PlaneImage' src={PlaneImage} alt='Самолет' width='auto' height='auto'/>
                <div className='SquareInfo'>
                  <div className='SquareInfoHeader'>Высокая мобильность</div>
                  <div className='SquareInfoWrapper'><Image src={DegIco} alt='120 градусов'/></div>
                  <div className='SquareInfoDescr'>Горизонтальное вращение</div>
                </div>
              </div>
              <div className='PromoImageLine PromoImageLineSecond'>
                <div className='SquareInfo'>
                  <div className='SquareInfoHeader'>Поляризационный фильтр</div>
                  <div className='SquareInfoWrapper'><Image src={PercentsIco} alt='87%'/></div>
                  <div className='SquareInfoDescr'>Рассеивание прямых лучей</div>
                </div>
                <div className='SquareInfo'>
                  <div className='SquareInfoHeader'>Увеличительное стекло</div>
                  <div className='SquareInfoWrapper'><Image src={SearchIco} alt='увеличительное стекло'/><span>. . . . . . .</span></div>
                  <div className='SquareInfoDescr'>Micro3X</div>
                </div>
                <div className='SquareInfo'>
                  <div className='SquareInfoHeader'>Crossfire</div>
                  <div className='SquareInfoWrapper'><div className='DotIco'></div><span>. . . . . . .</span></div>
                  <div className='SquareInfoDescr'>Зеленая точка</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='backdrop'></div>
      </section>
      <SubHeader/>
      <FuturedProducts/>
      <WhyStealthVision/>
      <TopProductBlock/>
      <Copyright/>
      <ReviewBlock/>
      <ActualQuestion/>
      <PromoSafe/>
    </div>
  )
}
