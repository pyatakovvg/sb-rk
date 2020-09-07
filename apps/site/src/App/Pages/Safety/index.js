
import {BreadcrumbLink, Breadcrumbs, BreadcrumbTitle} from "@ui.packages/kit";

import React, { lazy, Suspense, useEffect } from 'react';

import styles from './default.module.scss';


const Partition = lazy(() => import(/* webpackChunkName: "partition" *//* webpackMode: "lazy" */'../../Layouts/Partition'));


export default function SafetyPage() {

  useEffect(function initPage() {
    document.title = process.env['REACT_APP_WEBSITE_NAME'] + ' - Безопасность труда';
    document.querySelector('#scroll').scroll(0, 0);
  });

  return (
    <Suspense fallback={null}>
      <Partition>
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
              <BreadcrumbTitle title="Безопасность труда" />
            </Breadcrumbs>
          </div>
          <h2 className={styles['title']}>Безопасность труда</h2>
        </div>

        <div className={styles['content']}>
          <div className={styles['block']}>
            <h3 className={styles['h3']}>Преимущества</h3>
            <ul className={styles['ul']}>
              <li className={styles['li']}>Возможность делегировать свои риски;</li>
              <li className={styles['li']}>Гарантия выполнения указанного в договоре объема работ;</li>
              <li className={styles['li']}>Всегда квалифицированные кадры, за которыми стоит группа профессионалов;</li>
              <li className={styles['li']}>Использование передового опыта в области охраны труда;</li>
              <li className={styles['li']}>Высвобождение времени руководителя, которое он может использовать рационально, сконцентрировавшись на главных стратегических целях и задачах своей организации;</li>
              <li className={styles['li']}>Возможность проконсультироваться с экспертом в любое время;</li>
              <li className={styles['li']}>Экономия бюджета на организацию рабочего места для штатного специалиста и уплату налогов с заработной платы;</li>
              <li className={styles['li']}>Возможность комплексного обслуживания по охране труда, пожарной безопасности и экологии;</li>
            </ul>
          </div>
          <div className={styles['block']}>
            <h3 className={styles['h3']}>Дорожная карта</h3>
            <ul className={styles['ul']}>
              <li className={styles['li']}>Заключение договора оказания услуг и его оплата;</li>
              <li className={styles['li']}>Согласование места, даты и времени осмотра;</li>
              <li className={styles['li']}>Осмотр объекта, выполнение измерений, фотофиксация и составление акта осмотра;</li>
              <li className={styles['li']}>Анализ полученных данных, изучение обстоятельств по полученным материалам, выполнение необходимых расчетов, обоснование результатов;</li>
              <li className={styles['li']}>Подготовка необходимой документации;</li>
              <li className={styles['li']}>Подписание акта оказанных услуг;</li>
              <li className={styles['li']}>Выдача заказчику заключения;</li>
            </ul>
          </div>
          <div className={styles['block']}>
            <h3 className={styles['h3']}>Направления</h3>

            <p className="p"><b>Охрана труда</b></p>
            <ul className="ul">
              <li className="li">Подготовка полного пакета документов;</li>
              <li className="li">Обучение по охране труда;</li>
              <li className="li">Специальная оценка условий труда (СОУТ);</li>
              <li className="li">Проведение медицинских осмотров;</li>
              <li className="li">Расследование несчастных случаев на производстве;</li>
              <li className="li">Оценка профессиональных рисков;</li>
              <li className="li">Сопровождение предприятий в области охраны труда на абонентской основе;</li>
              <li className="li">Специальные цены на товары по охране труда;</li>
            </ul>

            <p className="p"><b>Пожарная безопасность</b></p>
            <ul className="ul">
              <li className="li">Подготовка полного пакета документов;</li>
              <li className="li">Обучение по пожарной безопасности;</li>
              <li className="li">Декларация пожарной безопасности с регистрацией в МЧС;</li>
              <li className="li">Категорирование помещений, зданий и наружных установок по взрывопожарной и пожарной опасности, присвоение класса зоны;</li>
              <li className="li">Проектирование и установка пожарной сигнализации;</li>
              <li className="li">Автоматическая система пожаротушения (все виды);</li>
              <li className="li">Противопожарный водопровод, насосные станции, ёмкости для нужд пожаротушения;</li>
              <li className="li">Огнезащита металла, дерева, ткани и любой отделки;</li>
              <li className="li">Аварийное освещение на путях эвакуации;</li>
              <li className="li">Фотолюминесцентные эвакуационные системы (ФЭС);</li>
              <li className="li">Системы противодымной защиты;</li>
              <li className="li">Монтаж и испытание металлических пожарных лестниц и ограждений кровли;</li>
              <li className="li">Расчет пожарного риска;</li>
            </ul>

            <p className="p"><b>Экологическая безопасность</b></p>
            <ul className="ul">
              <li className="li">Подготовка полного пакета документов;</li>
              <li className="li">Обучение по экологической безопасности;</li>
              <li className="li">Разработка паспорта отходов;</li>
              <li className="li">Подготовка всех видов ежегодной отчетности;</li>
            </ul>

            <p className="p"><b>Электробезопасность</b></p>
            <ul className="ul">
              <li className="li">Подготовка полного пакета документов;</li>
              <li className="li">Обучение по электробезопасности на все группы;</li>
              <li className="li">Измерения и испытания электрооборудования и электроустановок зданий и сооружений по лицензии Ростехнадзора и Республике Крым и г. Севастополь;</li>
            </ul>

            <p className="p"><b>Антитеррористическая безопасность</b></p>
            <ul className="ul">
              <li className="li">Подготовка полного пакета документов;</li>
              <li className="li">Обучение по антитеррористической безопасности;</li>
              <li className="li">Разработка паспорта антитеррористической защиты;</li>
              <li className="li">Создание, модернизация и поддержание в исправном состоянии технических средств обеспечения безопасности;</li>
              <li className="li">Плакаты и стенды по противодействию терроризму;</li>
            </ul>

            <p className="p"><b>Гражданская оборона и чрезвычайные ситуации</b></p>
            <ul className="ul">
              <li className="li">Подготовка полного пакета документов;</li>
              <li className="li">Обучение руководителей и специалистов по Гражданской Обороне;</li>
              <li className="li">Стенды и плакаты по гражданской Обороне;</li>
            </ul>

            <p className="p"><b>Промышленная безопасность</b></p>
            <ul className="ul">
              <li className="li">Подготовка полного пакета документов;</li>
              <li className="li">Укомплектование ОПО персоналам соответствующей квалификации;</li>
              <li className="li">Обеспечение безопасности рабочих процессов на ОПО;</li>
              <li className="li">Предоставление отчетности в Ростехнадзор;</li>
              <li className="li">Планирование мероприятий по локализации и ликвидации аварий;</li>
            </ul>
          </div>



        </div>
      </Partition>
    </Suspense>
  );
};
