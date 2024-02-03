'use client'
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css'
import {
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    UncontrolledAccordion,
  } from 'reactstrap'
import './ActualQuestion.sass'

export default function ActualQuestion(){

    return(
        <div className="ActualQuestion">
            <div className="container">
                <div className="SectionHeader">
                    <div className="PageSubHeader">Часто задаваемые вопросы</div>
                    <Link className="PageSubHeaderLink" href='/'>Читать все</Link>
                </div>
                <UncontrolledAccordion className="ActualQuestionAccordion" defaultOpen="1">
                    <AccordionItem className="ActualQuestionAccordionItem">
                        <AccordionHeader className="ActualQuestionAccordionItemHeader" targetId="1">
                        <span>01.</span> Что такое оптический прицел Stealth Vision®?
                        </AccordionHeader>
                        <AccordionBody className="ActualQuestionAccordionItemBody" accordionId="1">
                        Оптический прицел Stealth Vision® - это прицел премиум-класса для стрельбы на большие расстояния и охоты. Он оснащен системой защиты от перекоса и технологией green light, гарантирующей точные выстрелы каждый раз. Это идеальный прицел для стрелков и охотников, которым нужна точность и постоянство на больших расстояниях.
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem className="ActualQuestionAccordionItem">
                        <AccordionHeader className="ActualQuestionAccordionItemHeader" targetId="2">
                        <span>02.</span> Какие все продукты у нас есть?
                        </AccordionHeader>
                        <AccordionBody className="ActualQuestionAccordionItemBody" accordionId="2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem className="ActualQuestionAccordionItem">
                        <AccordionHeader className="ActualQuestionAccordionItemHeader" targetId="3">
                        <span>03.</span> Как сделать заказ?
                        </AccordionHeader>
                        <AccordionBody className="ActualQuestionAccordionItemBody" accordionId="3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </AccordionBody>
                    </AccordionItem>
                </UncontrolledAccordion>
            </div>
        </div>
    )
}