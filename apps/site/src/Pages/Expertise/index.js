
import { BreadcrumbLink, Breadcrumbs, BreadcrumbTitle, PartitionLayout } from '@ui.packages/kit';

import React, { useEffect } from 'react';

import styles from './default.module.scss';


export default function ExpertisePage() {

  useEffect(function initPage() {
    document.title = process.env['REACT_APP_WEBSITE_NAME'] + ' - Назависимая оценка и экспертиза'
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
            <BreadcrumbTitle title="Независимая оценка и экспертиза" />
          </Breadcrumbs>
        </div>
        <h2 className={styles['title']}>Независимая оценка и экспертиза</h2>
      </div>

      <p className="p"><b>Основные направления независимой оценки:</b></p>

      <ul className="ul">
        <li className="li"><a className="a" target="_blank" rel="noreferrer" href="https://expo-crm.ru/appraisal/1.html">Оценка недвижимости</a></li>
        <li className="li"><a className="a" target="_blank" rel="noreferrer" href="https://expo-crm.ru/appraisal/69.html">Оценка земельного участка</a></li>
        <li className="li"><a className="a" target="_blank" rel="noreferrer" href="https://expo-crm.ru/appraisal/63.html">Оценка нежилых помещений, зданий, сооружений</a></li>
        <li className="li"><a className="a" target="_blank" rel="noreferrer" href="https://expo-crm.ru/appraisal/2.html">Оценка коммерческой недвижимости</a></li>
        <li className="li"><a className="a" target="_blank" rel="noreferrer" href="https://expo-crm.ru/appraisal/3.html">Оценка арендной ставки недвижимости</a></li>
        <li className="li"><a className="a" target="_blank" rel="noreferrer" href="https://expo-crm.ru/appraisal/18.html">Оценка стоимости ущерба при аварии: залив, пожар, механические и др. повреждения</a></li>
        <li className="li"><a className="a" target="_blank" rel="noreferrer" href="https://expo-crm.ru/appraisal/112.html">Оценка для нотариальных действий</a></li>
        <li className="li"><a className="a" target="_blank" rel="noreferrer" href="https://expo-crm.ru/appraisal/5.html">Оценка транспортных средств</a></li>
        <li className="li"><a className="a" target="_blank" rel="noreferrer" href="https://expo-crm.ru/appraisal/19.html">Оценка восстановительного ремонта транспортных средств (для ОСАГО, КАСКО)</a></li>
        <li className="li"><a className="a" target="_blank" rel="noreferrer" href="https://expo-crm.ru/appraisal/51.html">Оценка плавательных средств: судов, яхт, катеров, лодок, скутеров, двигателей</a></li>
        <li className="li"><a className="a" target="_blank" rel="noreferrer" href="https://expo-crm.ru/appraisal/64.html">Оценка воздушных судов</a></li>
        <li className="li"><a className="a" target="_blank" rel="noreferrer" href="https://expo-crm.ru/appraisal/6.html">Оценка морских и воздушных судов, отнесенных к объектам недвижимости</a></li>
        <li className="li"><a className="a" target="_blank" rel="noreferrer" href="https://expo-crm.ru/appraisal/12.html">Оценка машин и оборудования</a></li>
        <li className="li"><a className="a" target="_blank" rel="noreferrer" href="https://expo-crm.ru/appraisal/13.html">Оценка вычислительной и оргтехники, бытовой техники, мебели</a></li>
        <li className="li"><a className="a" target="_blank" rel="noreferrer" href="https://expo-crm.ru/appraisal/17.html">Оспаривание кадастровой стоимости</a></li>
      </ul>

      <p className="p"><b>Основные направления независимой экспертизы:</b></p>

      <p className="p">Автотехническая экспертиза</p>

      <ul className="ul">
        <li className="li"><a className="a" target="_blank" rel="noreferrer" href="https://expo-crm.ru/expert/160.html">Экспертиза качества ремонта автомобиля</a></li>
        <li className="li"><a className="a" target="_blank" rel="noreferrer" href="https://expo-crm.ru/expert/82.html">Экспертиза технического состояния транспортного средства</a></li>
        <li className="li"><a className="a" target="_blank" rel="noreferrer" href="https://expo-crm.ru/expert/83.html">Транспортно-трасологическая экспертиза</a></li>
        <li className="li"><a className="a" target="_blank" rel="noreferrer" href="https://expo-crm.ru/expert/84.html">Дорожная экспертиза участка дороги</a></li>
        <li className="li"><a className="a" target="_blank" rel="noreferrer" href="https://expo-crm.ru/expert/85.html">Заключение судебного эксперта автотовароведа по заявлению граждан для суда</a></li>
        <li className="li"><a className="a" target="_blank" rel="noreferrer" href="https://expo-crm.ru/expert/86.html">Идентификация автомототранспортного средства</a></li>
      </ul>

      <p className="p">Строительно-техническая экспертиза</p>

      <ul className="ul">
        <li className="li"><a className="a" target="_blank" rel="noreferrer" href="https://expo-crm.ru/expert/123.html">Определение порядка пользования недвижимостью</a></li>
        <li className="li"><a className="a" target="_blank" rel="noreferrer" href="https://expo-crm.ru/expert/91.html">Раздел жилой и нежилой недвижимости</a></li>
        <li className="li"><a className="a" target="_blank" rel="noreferrer" href="https://expo-crm.ru/expert/92.html">Определение пригодности (непригодности) здания, помещения для эксплуатации</a></li>
        <li className="li"><a className="a" target="_blank" rel="noreferrer" href="https://expo-crm.ru/expert/124.html">Определение пригодности дома, квартиры для проживания</a></li>
        <li className="li"><a className="a" target="_blank" rel="noreferrer" href="https://expo-crm.ru/expert/125.html">Исследование объектов самовольного строительства на соответствие СНиП (узаконивание самостроя)</a></li>
        <li className="li"><a className="a" target="_blank" rel="noreferrer" href="https://expo-crm.ru/expert/126.html">Определение физического износа недвижимости</a></li>
        <li className="li"><a className="a" target="_blank" rel="noreferrer" href="https://expo-crm.ru/expert/127.html">Определение ветхости</a></li>
        <li className="li"><a className="a" target="_blank" rel="noreferrer" href="https://expo-crm.ru/expert/93.html">Экспертиза причин разрушения (повреждения) недвижимости</a></li>
        <li className="li"><a className="a" target="_blank" rel="noreferrer" href="https://expo-crm.ru/expert/94.html">Экспертиза проектно-сметной документации</a></li>
        <li className="li"><a className="a" target="_blank" rel="noreferrer" href="https://expo-crm.ru/expert/95.html">Обследование всех видов недвижимости</a></li>
        <li className="li"><a className="a" target="_blank" rel="noreferrer" href="https://expo-crm.ru/expert/130.html">Определение капитальности недвижимости</a></li>
        <li className="li"><a className="a" target="_blank" rel="noreferrer" href="https://expo-crm.ru/expert/129.html">Экспертиза строительных материалов</a></li>
        <li className="li"><a className="a" target="_blank" rel="noreferrer" href="https://expo-crm.ru/expert/149.html">Экспертиза качества строительно-монтажных работ</a></li>
        <li className="li"><a className="a" target="_blank" rel="noreferrer" href="https://expo-crm.ru/expert/182.html">Определение прочности и дефектов бетона в изделиях и конструкциях ультразвуковым методом</a></li>
        <li className="li"><a className="a" target="_blank" rel="noreferrer" href="https://expo-crm.ru/expert/131.html">Определение стоимости ущерба недвижимости</a></li>
        <li className="li"><a className="a" target="_blank" rel="noreferrer" href="https://expo-crm.ru/expert/178.html">Дачная амнистия в Крыму</a></li>
      </ul>

      <p className="p"><b>Судебная экспертиза</b></p>

      <p className="p">Этапы проведения независимой оценки и экспертизы:</p>

      <ul className="ul">
        <li className="li">Заключение договора оказания услуг и его оплата;</li>
        <li className="li">Согласование места, даты и времени осмотра;</li>
        <li className="li">Уведомление всех заинтересованных лиц о месте, дате и времени производства экспертного осмотра;</li>
        <li className="li">Подготовка и анализ необходимой документации;</li>
        <li className="li">Осмотр объекта оценки, выполнение измерений, фотофиксация и составление акта осмотра;</li>
        <li className="li">Анализ полученных данных, изучение обстоятельств по полученным материалам, выполнение необходимых расчетов, обоснование результатов;</li>
        <li className="li">Подготовка и выдача заказчику заключения;</li>
      </ul>
    </PartitionLayout>
  );
};
