
import { BreadcrumbLink, Breadcrumbs, BreadcrumbTitle, PartitionLayout } from '@ui.packages/kit';
import { Header, Text, UL, LI, Link } from '@ui.packages/kit';

import React, { useEffect } from 'react';

import styles from './default.module.scss';


export default function ExpertisePage() {

  useEffect(function initPage() {
    document.title = process.env['REACT_APP_WEBSITE_NAME'] + ' - Назависимая оценка и экспертиза'
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
            <BreadcrumbTitle title="Независимая оценка и экспертиза" />
          </Breadcrumbs>
        </div>
        <Header>Независимая оценка и экспертиза</Header>
      </div>

      <Header level={2}>Основные направления независимой оценки:</Header>

      <UL>
        <LI><Link href="https://expo-crm.ru/appraisal/1.html">Оценка недвижимости</Link></LI>
        <LI><Link href="https://expo-crm.ru/appraisal/69.html">Оценка земельного участка</Link></LI>
        <LI><Link href="https://expo-crm.ru/appraisal/63.html">Оценка нежилых помещений, зданий, сооружений</Link></LI>
        <LI><Link href="https://expo-crm.ru/appraisal/2.html">Оценка коммерческой недвижимости</Link></LI>
        <LI><Link href="https://expo-crm.ru/appraisal/3.html">Оценка арендной ставки недвижимости</Link></LI>
        <LI><Link href="https://expo-crm.ru/appraisal/18.html">Оценка стоимости ущерба при аварии: залив, пожар, механические и др. повреждения</Link></LI>
        <LI><Link href="https://expo-crm.ru/appraisal/112.html">Оценка для нотариальных действий</Link></LI>
        <LI><Link href="https://expo-crm.ru/appraisal/5.html">Оценка транспортных средств</Link></LI>
        <LI><Link href="https://expo-crm.ru/appraisal/19.html">Оценка восстановительного ремонта транспортных средств (для ОСАГО, КАСКО)</Link></LI>
        <LI><Link href="https://expo-crm.ru/appraisal/51.html">Оценка плавательных средств: судов, яхт, катеров, лодок, скутеров, двигателей</Link></LI>
        <LI><Link href="https://expo-crm.ru/appraisal/64.html">Оценка воздушных судов</Link></LI>
        <LI><Link href="https://expo-crm.ru/appraisal/6.html">Оценка морских и воздушных судов, отнесенных к объектам недвижимости</Link></LI>
        <LI><Link href="https://expo-crm.ru/appraisal/12.html">Оценка машин и оборудования</Link></LI>
        <LI><Link href="https://expo-crm.ru/appraisal/13.html">Оценка вычислительной и оргтехники, бытовой техники, мебели</Link></LI>
        <LI><Link href="https://expo-crm.ru/appraisal/17.html">Оспаривание кадастровой стоимости</Link></LI>
      </UL>

      <Header level={2}>Основные направления независимой экспертизы:</Header>

      <Text type={Text.TYPE_PARAGRAPH}>Автотехническая экспертиза</Text>

      <UL>
        <LI><Link href="https://expo-crm.ru/expert/160.html">Экспертиза качества ремонта автомобиля</Link></LI>
        <LI><Link href="https://expo-crm.ru/expert/82.html">Экспертиза технического состояния транспортного средства</Link></LI>
        <LI><Link href="https://expo-crm.ru/expert/83.html">Транспортно-трасологическая экспертиза</Link></LI>
        <LI><Link href="https://expo-crm.ru/expert/84.html">Дорожная экспертиза участка дороги</Link></LI>
        <LI><Link href="https://expo-crm.ru/expert/85.html">Заключение судебного эксперта автотовароведа по заявлению граждан для суда</Link></LI>
        <LI><Link href="https://expo-crm.ru/expert/86.html">Идентификация автомототранспортного средства</Link></LI>
      </UL>

      <Text type={Text.TYPE_PARAGRAPH}>Строительно-техническая экспертиза</Text>

      <UL>
        <LI><Link href="https://expo-crm.ru/expert/123.html">Определение порядка пользования недвижимостью</Link></LI>
        <LI><Link href="https://expo-crm.ru/expert/91.html">Раздел жилой и нежилой недвижимости</Link></LI>
        <LI><Link href="https://expo-crm.ru/expert/92.html">Определение пригодности (непригодности) здания, помещения для эксплуатации</Link></LI>
        <LI><Link href="https://expo-crm.ru/expert/124.html">Определение пригодности дома, квартиры для проживания</Link></LI>
        <LI><Link href="https://expo-crm.ru/expert/125.html">Исследование объектов самовольного строительства на соответствие СНиП (узаконивание самостроя)</Link></LI>
        <LI><Link href="https://expo-crm.ru/expert/126.html">Определение физического износа недвижимости</Link></LI>
        <LI><Link href="https://expo-crm.ru/expert/127.html">Определение ветхости</Link></LI>
        <LI><Link href="https://expo-crm.ru/expert/93.html">Экспертиза причин разрушения (повреждения) недвижимости</Link></LI>
        <LI><Link href="https://expo-crm.ru/expert/94.html">Экспертиза проектно-сметной документации</Link></LI>
        <LI><Link href="https://expo-crm.ru/expert/95.html">Обследование всех видов недвижимости</Link></LI>
        <LI><Link href="https://expo-crm.ru/expert/130.html">Определение капитальности недвижимости</Link></LI>
        <LI><Link href="https://expo-crm.ru/expert/129.html">Экспертиза строительных материалов</Link></LI>
        <LI><Link href="https://expo-crm.ru/expert/149.html">Экспертиза качества строительно-монтажных работ</Link></LI>
        <LI><Link href="https://expo-crm.ru/expert/182.html">Определение прочности и дефектов бетона в изделиях и конструкциях ультразвуковым методом</Link></LI>
        <LI><Link href="https://expo-crm.ru/expert/131.html">Определение стоимости ущерба недвижимости</Link></LI>
        <LI><Link href="https://expo-crm.ru/expert/178.html">Дачная амнистия в Крыму</Link></LI>
      </UL>

      <Header level={2}>Судебная экспертиза:</Header>

      <Text type={Text.TYPE_PARAGRAPH}>Этапы проведения независимой оценки и экспертизы:</Text>

      <UL>
        <LI>Заключение договора оказания услуг и его оплата;</LI>
        <LI>Согласование места, даты и времени осмотра;</LI>
        <LI>Уведомление всех заинтересованных лиц о месте, дате и времени производства экспертного осмотра;</LI>
        <LI>Подготовка и анализ необходимой документации;</LI>
        <LI>Осмотр объекта оценки, выполнение измерений, фотофиксация и составление акта осмотра;</LI>
        <LI>Анализ полученных данных, изучение обстоятельств по полученным материалам, выполнение необходимых расчетов, обоснование результатов;</LI>
        <LI>Подготовка и выдача заказчику заключения;</LI>
      </UL>
    </PartitionLayout>
  );
};
