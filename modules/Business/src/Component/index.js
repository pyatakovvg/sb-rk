
import { BreadcrumbLink, Breadcrumbs, BreadcrumbTitle, PartitionLayout } from '@ui.packages/kit';
import { Header, Text, UL, LI } from '@ui.packages/kit';

import React, { useEffect } from 'react';

import styles from './default.module.scss';


export default function BookkeepingPage() {

  useEffect(function initPage() {
    document.title = process.env['REACT_APP_WEBSITE_NAME'] + ' - Бухгалтерское сопровождение'
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
            <BreadcrumbTitle title="Бухгалтерское сопровождение" />
          </Breadcrumbs>
        </div>
        <Header>Бухгалтерское сопровождение</Header>
      </div>

      <Header level={2}>Что получает клиент при заказе бухгалтерских услуг?</Header>
      <Text type={Text.TYPE_PARAGRAPH}>Сохранение деловой и коммерческой тайны при любых обстоятельствах. Возможность получить консультационные услуги бухгалтера при первой необходимости. Значительная экономия за счет отказа от содержания штатной бухгалтерии. Своевременность и точность при сдаче отчетности всех видов. Оперативность. Удобный механизм контроля со стороны заказчика. Бухгалтерские услуги от партнера с безукоризненной деловой репутацией. Гарантированное качество.</Text>

      <Header level={2}>Что входит в комплекс бухгалтерских услуг?</Header>
      <Text type={Text.TYPE_PARAGRAPH}>Мы стремимся к максимальной гибкости при организации работы в интересах клиента, поэтому у наших заказчиков есть возможность выбора удобных условий сотрудничества. В стандартный набор бухгалтерских услуг входят:</Text>
      <UL>
        <LI>консультации по вопросам организации учета и оптимизации налогообложения;</LI>
        <LI>услуги бухгалтера для сопровождения работы компании;</LI>
        <LI>формирование нулевой отчетности;</LI>
        <LI>восстановление бухгалтерского учета;</LI>
        <LI>составление и сдача отчетности;</LI>
        <LI>начисление зарплат и расчет других выплат;</LI>
        <LI>прочие бухгалтерские услуги.</LI>
      </UL>
      <Text type={Text.TYPE_PARAGRAPH}>Очень часто проблемы и сложности в деятельности организации возникают именно из-за невнимательного, а иногда и неумелого проведения работ. Руководителю сложно контролировать абсолютно все процессы, тем более следить за качеством подготовки документов и сроками сдачи отчетности. Услуги частного бухгалтера также не всегда оправдывают возложенные надежды, так как действия такого специалиста необходимо постоянно контролировать, как и штатную бухгалтерию. Сэкономить время, силы и финансовые ресурсы, а также наладить своевременное и качественное сопровождение бизнеса поможет сотрудничество со специализированной компанией. Благодаря проверенному и эффективному алгоритму работы и собственной системе контроля качества «ШКОЛА БИЗНЕСА» гарантирует точность даже в мелочах.</Text>

      <Header level={2}>От чего зависит стоимость бухгалтерских услуг?</Header>
      <Text type={Text.TYPE_PARAGRAPH}>В отличие от прайса частного бухгалтера, где представлены фиксированные цены ведения бухгалтерского учета, наша компания индивидуально выполняет расчет стоимости сотрудничества для каждого заказчика. Итоговая цифра зависит от сферы деятельности организации, численности сотрудников, выбранной системы налогообложения и т.д. Бухгалтерские услуги такого рода — решение для тех, кто стремится к оптимизации расходов, но не готов экономить на качестве! Хотите получить эффективное и своевременное ведение всех процессов и составление всех видов отчетов, гибкое управление, консультации и помощь в любой ситуации? Заказывайте бухгалтерские услуги в компании «ШКОЛА БИЗНЕСА» через форму заявки на сайте или по телефону.</Text>
    </PartitionLayout>
  );
};