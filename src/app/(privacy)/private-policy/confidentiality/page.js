import Link from "next/link";
import TemplateDash from "../../components/template";

export default function Confidentiality(){
    return(
        <TemplateDash pageheader={"Конфиденциальность"} confidentialityStatus='active'>
            <div className="PrivacyPolicy">
                <h2>Политика конфиденциальности</h2>
                <p>На сайте stealthvision.com, доступном по адресу <Link href='/'>https://stealthvision.com/</Link>, одним из наших главных приоритетов является конфиденциальность наших посетителей. Этот документ о политике конфиденциальности содержит типы информации, которую собирает и записывает <Link href='/'>stealthvision.com</Link>, и то, как мы ее используем.
                <br/><br/>
                Если у вас есть дополнительные вопросы или вам требуется дополнительная информация о нашей политике конфиденциальности, не стесняйтесь обращаться к нам.
                <br/><br/>
                Настоящая Политика конфиденциальности применяется только к нашей онлайн-активности и действительна для посетителей нашего веб-сайта в отношении информации, которой они поделились и/или собирают в <Link href='/'>stealthvision.com</Link>. Настоящая политика неприменима к любой информации, собранной в автономном режиме или по каналам, отличным от этого веб-сайта..</p>
                <h2>Соглашение</h2>
                <p>Используя наш веб-сайт, вы настоящим соглашаетесь с нашей Политикой конфиденциальности и принимаете ее условия.</p>
                <h2>Информация, которую мы собираем</h2>
                <p>Личная информация, которую вас попросят предоставить, и причины, по которым вас попросят ее предоставить, будут разъяснены вам в тот момент, когда мы попросим вас предоставить вашу личную информацию.
                <br/><br/>
                Если вы свяжетесь с нами напрямую, мы можем получить дополнительную информацию о вас, такую как ваше имя, адрес электронной почты, номер телефона, содержание сообщения и/или вложений, которые вы можете нам отправить, и любую другую информацию, которую вы можете захотеть предоставить.
                <br/><br/>
                Когда вы регистрируете учетную запись, мы можем запросить вашу контактную информацию, включая такие элементы, как имя, название компании, адрес, адрес электронной почты и номер телефона.</p>
            </div>
        </TemplateDash>
    )
}