
import { BreadcrumbLink, Breadcrumbs, BreadcrumbTitle } from '@ui.packages/kit';

import React, { lazy, Suspense, useEffect } from 'react';

import styles from './default.module.scss';


const Partition = lazy(() => import(/* webpackChunkName: "partition" *//* webpackMode: "lazy" */'../../Layouts/Partition'));


export default function CriminalPage() {

  useEffect(function initPage() {
    document.title = process.env['REACT_APP_WEBSITE_NAME'] + ' - Сопровождение по уголовным делам'
    document.querySelector('#scroll').scroll(0, 0);
  });

  return (
    <Suspense fallback={null}>
      <Partition className={styles['background']}>
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
              <BreadcrumbTitle title="Сопровождение по уголовным делам" />
            </Breadcrumbs>
          </div>
          <h2 className={styles['title']}>Сопровождение по уголовным делам</h2>
        </div>

        <p className="p">Услуги по уголовным делам позволяют осуществить профессиональную защиту граждан от незаконных или необоснованных обвинений, неправомерного осуждения, ограничения их прав и свобод. Частым явлением стали ситуации, в которых подозреваемые считаются обвиняемыми до момента передачи дел в суды и самостоятельные попытки разрешения ситуаций могут не принести положительных результатов. Обладающие большим опытом работы адвокаты по уголовным ШКОЛЫ БИЗНЕСА, досконально изучат все представленные доказательства, привлекут в дело свидетелей, совершат любые закрепленные законодательством действия, необходимые для успеха Доверителя.</p>

        <h3 className="h3">Подробнее об услуге</h3>

        <p className="p"><b>Адвокаты по уголовным делам ШКОЛЫ БИЗНЕСА помогут:</b></p>

        <ul className="ul">
          <li className="li">Представить интересы доверителя на всех стадиях уголовного процесса;</li>
          <li className="li">Разработать наиболее эффективную стратегию защиты в суде;</li>
          <li className="li">Смягчить приговор либо отменить его;</li>
          <li className="li">Защитить Вас от давления следствия, административного ресурса;</li>
          <li className="li">Предотвратить бездействие правоохранительных органов;</li>
          <li className="li">Оспорить необоснованный отказ в возбуждении уголовного дела.</li>
        </ul>

        <p className="p"><b>Какие действия мы будем предпринимать:</b></p>

        <ul className="ul">
          <li className="li">Подробно консультировать относительно уголовного производства, а также имеющихся материалов дела и обстоятельств для того, чтобы уберечь Доверителя от неверных шагов и повысить шансы на успешный исход дела;</li>
          <li className="li">Проведем правовой анализ сложившихся обстоятельств;</li>
          <li className="li">Соберем доказательства, необходимые для аргументации правовой позиции подозреваемого, подсудимого, осужденного;</li>
          <li className="li">Разработаем правовую позицию потерпевшего, подозреваемого, подсудимого, осужденного;</li>
          <li className="li">Обеспечим адвокатское сопровождение уголовного производства на стадии допроса, следствия, досудебного и судебного рассмотрения уголовного дела для предотвращения давления правоохранительных органов и повышения шансов на переквалификацию статьи, снятие обвинений;</li>
          <li className="li">Подготовим все необходимые процессуальные документы;</li>
          <li className="li">Защитим интересы Доверителя во всех судебных инстанциях, следственных и государственных органах, органах прокуратуры и др.</li>
        </ul>

        <p className="p"><b>Наши преимущества:</b></p>

        <ul className="ul">
          <li className="li">Уголовная практика является основным направлением деятельности наших адвокатов уже более 15 лет;</li>
          <li className="li">Многие из наших специалистов по уголовным делам — бывшие сотрудники правоохранительных органов, которые знают, как работает система изнутри и обладают опытом взаимодействия с властными структурами;</li>
          <li className="li">Успешно проведено более 2000 процессов.</li>
        </ul>
      </Partition>
    </Suspense>
  );
};
