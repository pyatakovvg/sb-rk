
import { BreadcrumbLink, Breadcrumbs, BreadcrumbTitle, PartitionLayout } from '@ui.packages/kit';
import { Header, Text, UL, LI } from '@ui.packages/kit';

import React, { useEffect } from 'react';

import styles from './default.module.scss';


export default function CriminalPage() {

  useEffect(function initPage() {
    document.title = process.env['REACT_APP_WEBSITE_NAME'] + ' - Сопровождение по уголовным делам'
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
            <BreadcrumbTitle title="Сопровождение по уголовным делам" />
          </Breadcrumbs>
        </div>
        <Header>Сопровождение по уголовным делам</Header>
      </div>

      <Text type={Text.TYPE_PARAGRAPH}>Услуги по уголовным делам позволяют осуществить профессиональную защиту граждан от незаконных или необоснованных обвинений, неправомерного осуждения, ограничения их прав и свобод. Частым явлением стали ситуации, в которых подозреваемые считаются обвиняемыми до момента передачи дел в суды и самостоятельные попытки разрешения ситуаций могут не принести положительных результатов. Обладающие большим опытом работы адвокаты по уголовным ШКОЛЫ БИЗНЕСА, досконально изучат все представленные доказательства, привлекут в дело свидетелей, совершат любые закрепленные законодательством действия, необходимые для успеха Доверителя.</Text>

      <Header level={4}>Адвокаты по уголовным делам ШКОЛЫ БИЗНЕСА помогут:</Header>

      <UL>
        <LI>Представить интересы доверителя на всех стадиях уголовного процесса;</LI>
        <LI>Разработать наиболее эффективную стратегию защиты в суде;</LI>
        <LI>Смягчить приговор либо отменить его;</LI>
        <LI>Защитить Вас от давления следствия, административного ресурса;</LI>
        <LI>Предотвратить бездействие правоохранительных органов;</LI>
        <LI>Оспорить необоснованный отказ в возбуждении уголовного дела.</LI>
      </UL>

      <Header level={4}>Какие действия мы будем предпринимать:</Header>

      <UL>
        <LI>Подробно консультировать относительно уголовного производства, а также имеющихся материалов дела и обстоятельств для того, чтобы уберечь Доверителя от неверных шагов и повысить шансы на успешный исход дела;</LI>
        <LI>Проведем правовой анализ сложившихся обстоятельств;</LI>
        <LI>Соберем доказательства, необходимые для аргументации правовой позиции подозреваемого, подсудимого, осужденного;</LI>
        <LI>Разработаем правовую позицию потерпевшего, подозреваемого, подсудимого, осужденного;</LI>
        <LI>Обеспечим адвокатское сопровождение уголовного производства на стадии допроса, следствия, досудебного и судебного рассмотрения уголовного дела для предотвращения давления правоохранительных органов и повышения шансов на переквалификацию статьи, снятие обвинений;</LI>
        <LI>Подготовим все необходимые процессуальные документы;</LI>
        <LI>Защитим интересы Доверителя во всех судебных инстанциях, следственных и государственных органах, органах прокуратуры и др.</LI>
      </UL>

      <Header level={4}>Наши преимущества:</Header>

      <UL>
        <LI>Уголовная практика является основным направлением деятельности наших адвокатов уже более 15 лет;</LI>
        <LI>Многие из наших специалистов по уголовным делам — бывшие сотрудники правоохранительных органов, которые знают, как работает система изнутри и обладают опытом взаимодействия с властными структурами;</LI>
        <LI>Успешно проведено более 2000 процессов.</LI>
      </UL>
    </PartitionLayout>
  );
};
