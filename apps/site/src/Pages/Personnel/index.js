
import { BreadcrumbLink, Breadcrumbs, BreadcrumbTitle, PartitionLayout } from "@ui.packages/kit";

import React, { useEffect } from 'react';

import styles from './default.module.scss';


export default function PersonnelPage() {

  useEffect(function initPage() {
    document.title = process.env['REACT_APP_WEBSITE_NAME'] + ' - Кадровое сопровождение';
    document.querySelector('#scroll').scroll(0, 0);
  });

  return (
    <PartitionLayout>
      <div className={styles['header']}>
        <div className={styles['breadcrumbs']}>
          <Breadcrumbs>
            <BreadcrumbLink title="Главная" href="/" />
            <BreadcrumbTitle title="Услуги">
              <BreadcrumbLink title="Бухгалтерское сопровождение" href="/services/bookkeeping" />
              <BreadcrumbLink title="Юридическое сопровождение" href="/services/legal" />
              <BreadcrumbLink title="Сопровождение по уголовным делам" href="/services/criminal" />
              <BreadcrumbLink title="Кадровое сопровождение" href="/services/personnel" />
              <BreadcrumbLink title="Независимая оценка и экспертиза" href="/services/expertise" />
              <BreadcrumbLink title="Безопасность труда" href="/services/safety" />
            </BreadcrumbTitle>
            <BreadcrumbTitle title="Кадровое сопровождение" />
          </Breadcrumbs>
        </div>
        <h2 className={styles['title']}>Кадровое сопровождение</h2>
      </div>

      <h3 className="h3">Что включает в себя услуга кадрового консалтинга?</h3>

      <p className="p"><b>Обязанности работодателя</b></p>
      <p className="p">Организация становится участником трудовых правоотношений с момента назначения на должность ее руководителя. С этого дня юридическое лицо приобретает статус работодателя. Подробнее об обязанностях организации как участника трудовых правоотношений расскажут специалисты по кадровому консалтингу компании «ШКОЛА БИЗНЕСА».</p>

      <p className="p"><b>Заключение трудового контракта с директором (руководителем)</b></p>
      <p className="p">Директор приступает к работе со дня регистрации компании. В соответствии с законом работодатель обязан заключить трудовой договор с руководителем в течение трех дней с момента фактического допущения последнего к работе. Документ составляется в письменной форме в двух экземплярах. Один из них передается работодателю, другой — сотруднику. Каждый экземпляр подлежит подписанию обеими сторонами. Получение документа работником подтверждается подписью. Она ставится на экземпляре контракта, который хранится в администрации предприятия. Специалисты по кадровому консалтингу помогут в грамотном составлении этого документа.</p>

      <p className="p"><b>Заключение трудового контракта с руководителем ООО</b></p>
      <p className="p">Руководитель ООО избирается на общем собрании компании. Единственный участник общества принимает такое решение единолично. В первом случае трудовой контракт с руководителем подписывает председательствующий на общем собрании, во втором случае — единственный участник. Также общее собрание вправе наделить одного из участников полномочиями по подписанию контракта с руководителем. В соответствии с уставом общества назначение директора может являться компетенцией совета директоров (наблюдательного совета). Тогда контракт с руководителем фирмы подписывает председатель этого органа. Об этом говорится в п. 1 ст. 40 ФЗ «Об ООО».</p>

      <p className="p"><b>Заключение трудового контракта с руководителем АО</b></p>
      <p className="p">Подписание трудового контракта с руководителем акционерного общества законом отнесено к компетенции председателя совета директоров (наблюдательного совета) фирмы. Председатель может передать эти полномочия другому лицу. При отсутствии совета директоров вопрос о заключении контракта с руководителем решается на общем собрании акционеров. Этот документ может подписать председательствующее или другое уполномоченное собранием лицо. Специалист по кадровому консалтингу более подробно разъяснит данный вопрос.</p>

      <p className="p"><b>Оформление трудового контракта с руководителем — единственным участником компании</b></p>
      <p className="p">Среди экспертов в сфере кадрового консалтинга есть два мнения по вопросу о заключении трудового контракта с директором — единственным участником фирмы. С одной стороны, правила и порядок оформления этого документа утверждены главой 43 ТК РФ «Особенности регулирования труда руководителя…». В ст. 273 кодекса сказано, что положения этой главы не распространяются на случаи, когда директором является единственный участник компании. На основании этой нормы официальные ведомства сделали вывод о невозможности заключения трудового контракта с таким руководителем. С другой стороны, арбитражными судами такой подход признан ошибочным. Специалисты в сфере кадрового консалтинга убеждены, что заключение трудового контракта с руководителем — единственным участником общества не только не противоречит нормам ТК РФ, но и является необходимым для ведения хозяйственной деятельности.</p>

      <p className="p"><b>Оформление трудовых книжек</b></p>
      <p className="p">Эта обязанность возникает у работодателя в отношении каждого сотрудника, если эта работа является основной для последнего. Трудовые книжки оформляются на тех сотрудников, которые проработали на предприятии более 5 дней. Эта обязанность распространяется также и на работодателей — индивидуальных предпринимателей. Однако ИП не вправе оформлять трудовые книжки и вносить в них сведения на впервые принятых на работу сотрудников. Руководитель компании самостоятельно делает запись о приеме на работу в своей книжке. Эти правила установлены ст. 66 ТК РФ. По желанию сотрудника в его книжку может быть внесена запись о работе по совместительству на основании подтверждающего этот факт документа. Специалист по кадровому консалтингу грамотно оформит трудовые книжки работников.</p>

      <p className="p"><b>Оформление локальных нормативных актов</b></p>
      <p className="p">Организация обязана оформить и утвердить следующие локальные нормативные акты:</p>
      <ul className="ul">
        <li className="li">График отпусков по форме Т-7;</li>
        <li className="li">Штатное расписание по форме Т-4;</li>
        <li className="li">Книгу учета движения трудовых книжек и вкладышей в них;</li>
        <li className="li">Положение о персональных данных работников. При приеме в штат сотрудник предоставляет информацию о себе: Ф. И. О., паспортные данные, адрес проживания и т. д. До заключения трудовых договоров работодатель обязан разработать Правила предоставления и защиты персональных данных работников;</li>
      </ul>

      <p className="p">Правила внутреннего трудового распорядка. Они регламентируют:</p>
      <ul className="ul">
        <li className="li">порядок приема в штат и увольнения сотрудников;</li>
        <li className="li">режим работы и время отдыха;</li>
        <li className="li">права, обязательства и ответственность сторон трудового контракта;</li>
        <li className="li">меры взыскания и поощрения работников и т. д. Специалисты в области кадрового консалтинга компании «ШКОЛА БИЗНЕСА» помогают в оформлении локальных нормативных актов организаций. По закону при приеме в штат работник должен ознакомиться под роспись с Правилами внутреннего трудового распорядка и Правилами о персональных данных. Об этом говорится в ст. 22 ТК РФ. Подписи сотрудников ставятся в листах ознакомления с указанными локальными актами;</li>
      </ul>

      <p className="p"><b>Защита коммерческой тайны</b></p>
      <p className="p">Нередко принимаемые в штат специалисты получают доступ к сведениям, представляющим ценность для предпринимательской деятельности. В таких случаях условие о неразглашении коммерческой тайны может быть включено в трудовой контракт с каждым сотрудником. Также работодатель принимает и другие меры по защите конфиденциальности информации:</p>
      <ul className="ul">
        <li className="li">определение перечня сведений, которые составляют коммерческую тайну;</li>
        <li className="li">установление порядка обращения с такой информацией (ограничение доступа и т.д.);</li>
        <li className="li">контроль над соблюдением правил работы с коммерческой тайной и др. Подробнее об этом говорится в ст. 10 ФЗ № 98 от 29.06.2004 г. «О коммерческой тайне». Администрация предприятия разрабатывает и утверждает Положение о защите конфиденциальной информации. При заключении трудовых контрактов работодатель знакомит принимаемых в штат сотрудников с этим локальным нормативным актом под расписку. Работники обязаны сохранять коммерческую тайну с момента ознакомления с указанным Положением. Специалисты по кадровому консалтингу готовы помочь в разработке Положения о коммерческой тайне;</li>
      </ul>

      <p className="p"><b>Ответственность за нарушение трудового законодательства</b></p>
      <p className="p">Санкции за несоблюдение законов о труде предусмотрены ст. 5.27 КоАП:</p>
      <ul className="ul">
        <li className="li">административный штраф в размере от 1 000 до 5 000 рублей в отношении нарушителей — должностных лиц;</li>
        <li className="li">штраф в размере от 1 000 до 5 000 рублей или приостановление деятельности на срок до 90 суток в отношении индивидуальных предпринимателей, которые привлечены к ответственности за несоблюдение трудового законодательства;</li>
        <li className="li">штраф в сумме от 30 000 до 50 000 рублей или официальное приостановление деятельности на срок до 90 суток в отношении юридических лиц — нарушителей. О том, в каких случаях компании и ИП привлекаются к административной ответственности, можно узнать у нашего специалиста;</li>
      </ul>

      <p className="p"><b>Результаты профессионального кадрового консалтинга</b></p>
      <p className="p">Любой клиент, рассматривающий для себя подобные услуги, хотел бы четко знать, какой именно эффект он получит. Итогом предоставления этой услуги станут:</p>
      <ul className="ul">
        <li className="li">оптимизация процесса управления персоналом;</li>
        <li className="li">выработка мотивационной программы, исходя из целей и политики, а также особенностей штатной структуры;</li>
        <li className="li">поиск резервов для роста производства за счет улучшения взаимодействия с сотрудниками;</li>
        <li className="li">минимизация рисков. В кадровом консалтинге используются специфические методики, в том числе — изучение неформальных отношений в коллективе, оценка психологического климата, изучение особенностей продвижения по служебной лестнице и т. д. Однако именно они позволяют находить те меры, которые максимально благотворно повлияют на ситуацию в конкретной компании;</li>
      </ul>
    </PartitionLayout>
  );
};
