import TemplateDash from '../../components/template'

export default function ServicePage(){
    return(
        <TemplateDash pageheader={"Возврат"} refundStatus='active'>
            <div className="PrivacyPolicy">
                <h2>Правила возврата товара для физических лиц</h2>
                <ul className="MainList">
                    <li>Возврат товара надлежащего качества, для розничных Покупателей, возможен в течение 14 календарных дней с момента приобретения товара Покупателем. Возврат товара надлежащего качества подлежит предварительному согласованию с вашим менеджером.</li>
                    <li>Не принимаются к возврату следующие Товары:
                        <ul className="NestedList">
                            <li>Гарантия не распространяется на детали электрики и детали подверженные естественному износу: свечи зажигания, фильтры, приводные ремни, тормозные колодки, диски, барабаны, диски сцепления, лампы, предохранители, щетки стеклоочистителей, масла, смазки, автохимия и автокосметика;</li>
                            <li>товары, поставленные по индивидуальному запросу Покупателя и имеющие индивидуально-определенные свойства (на основании ЗАКОНА О ЗАЩИТЕ ПРАВ ПОТРЕБИТЕЛЕЙ Статья 26.1. Дистанционный способ продажи товара).</li>
                        </ul>
                    </li>
                    <li>Для возврата товара необходимо соблюдение Покупателем следующих требований:
                        <ul className="NestedList">
                            <li>Товар не был в использовании, сохранены его товарный вид, потребительские свойства, пломбы, комплектация, фирменная упаковка, фабричные ярлыки;</li>
                            <li>Товар к возврату принимается в чистой, неповреждённой упаковке, с сохранённой этикеткой. Дополнительные надписи и цветной скотч на упаковке не допускаются. Испорченная упаковка или её отсутствие может послужить причиной отказа в возврате.</li>
                        </ul>
                    </li>
                    <li>Гарантийный срок на Товар составляет 30 дней. В случае если производителем Товара установлен более длительный гарантийный срок, то гарантийные сроки соответствуют установленным производителем Товара на территории Российской Федерации. При этом применяются условия гарантии, установленные соответствующим производителем. Гарантийный срок исчисляется с момента получения Товара Покупателем. Гарантия действительна только при условии установки Товара на транспортное средство на станции технического обслуживания.</li>
                    <li>Возврат товара ненадлежащего качества подлежит предварительному согласованию с вашим менеджером. При оформлении запроса, в зависимости от причины необходимо подгрузить фотографии товара, сканированные копии документов, другие доказательства, подтверждающие причину возврата.</li>
                    <li>Запрос на возврат (или отказ), в зависимости от его сложности и полноты данных, внесённых Покупателем, обрабатывается в течении 3-7 рабочих дней. После обработки запроса, менеджер проставляет статус «Возврат возможен» или «Возврат не возможен». Товары, отправленные на возврат без согласования с отделом возвратов, без статуса «Возврат возможен» к возврату приниматься не будут, и будут отправлены обратно за счёт Покупателя.</li>
                    <li>Возвраты от Покупателей принимаются в представительствах. При передаче товара на возврат Покупатель, вместе с возвращаемым товаром, должен предоставить заполненные документы, требующиеся для компенсации денежных средств за возвращенный товар. Данные документы предварительно отправляются Покупателем по электронной почте или лично в любом представительстве Продавца.</li>
                </ul>
                <h2>Возврат денежных средств</h2>
                <strong>При оплате картой:</strong>
                <p>Возврат переведённых средств, производится на ваш банковский счёт в течение 5-30 рабочих дней (срок зависит от банка, который выдал вашу банковскую карту).</p>
                <strong>При оплате наличными:</strong>
                <p>Деньги вернут в пункте выдачи, где вы забирали товар.</p>
                <strong>При оплате по реквизитам:</strong>
                <p>Нужно написать заявление на возврат денежных средств и отправить со сканом паспорта в личном кабинете. Срок возврата денежных средств — до 10 дней. Если деньги не вернулись в указанный срок, пожалуйста обратитесь в свой банк.</p>
            </div>
        </TemplateDash>
    )
}