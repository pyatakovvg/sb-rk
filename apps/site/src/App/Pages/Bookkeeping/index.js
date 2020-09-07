
import { BreadcrumbLink, Breadcrumbs, BreadcrumbTitle } from '@ui.packages/kit';

import React, { lazy, Suspense, useEffect } from 'react';

import styles from './default.module.scss';


const Partition = lazy(() => import(/* webpackChunkName: "partition" *//* webpackMode: "lazy" */'../../Layouts/Partition'));


export default function BookkeepingPage() {

  useEffect(function initPage() {
    document.title = process.env['REACT_APP_WEBSITE_NAME'] + ' - Бухгалтерское сопровождение'
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
              <BreadcrumbTitle title="Бухгалтерское сопровождение" />
            </Breadcrumbs>
          </div>
          <h2 className={styles['title']}>Бухгалтерское сопровождение</h2>
        </div>

        <h3 className="h3">Что получает клиент при заказе бухгалтерских услуг?</h3>
        <p className="p">Сохранение деловой и коммерческой тайны при любых обстоятельствах. Возможность получить консультационные услуги бухгалтера при первой необходимости. Значительная экономия за счет отказа от содержания штатной бухгалтерии. Своевременность и точность при сдаче отчетности всех видов. Оперативность. Удобный механизм контроля со стороны заказчика. Бухгалтерские услуги от партнера с безукоризненной деловой репутацией. Гарантированное качество.</p>

        <h3 className="h3">Что входит в комплекс бухгалтерских услуг?</h3>
        <p className="p">Мы стремимся к максимальной гибкости при организации работы в интересах клиента, поэтому у наших заказчиков есть возможность выбора удобных условий сотрудничества. В стандартный набор бухгалтерских услуг входят:</p>
        <ul className="ul">
          <li className="li">консультации по вопросам организации учета и оптимизации налогообложения;</li>
          <li className="li">услуги бухгалтера для сопровождения работы компании;</li>
          <li className="li">формирование нулевой отчетности;</li>
          <li className="li">восстановление бухгалтерского учета;</li>
          <li className="li">составление и сдача отчетности;</li>
          <li className="li">начисление зарплат и расчет других выплат;</li>
          <li className="li">прочие бухгалтерские услуги.</li>
        </ul>
        <p className="p">Очень часто проблемы и сложности в деятельности организации возникают именно из-за невнимательного, а иногда и неумелого проведения работ. Руководителю сложно контролировать абсолютно все процессы, тем более следить за качеством подготовки документов и сроками сдачи отчетности. Услуги частного бухгалтера также не всегда оправдывают возложенные надежды, так как действия такого специалиста необходимо постоянно контролировать, как и штатную бухгалтерию. Сэкономить время, силы и финансовые ресурсы, а также наладить своевременное и качественное сопровождение бизнеса поможет сотрудничество со специализированной компанией. Благодаря проверенному и эффективному алгоритму работы и собственной системе контроля качества «ШКОЛА БИЗНЕСА» гарантирует точность даже в мелочах.</p>

        <h3 className="h3">От чего зависит стоимость бухгалтерских услуг?</h3>
        <p className="p">В отличие от прайса частного бухгалтера, где представлены фиксированные цены ведения бухгалтерского учета, наша компания индивидуально выполняет расчет стоимости сотрудничества для каждого заказчика. Итоговая цифра зависит от сферы деятельности организации, численности сотрудников, выбранной системы налогообложения и т.д. Бухгалтерские услуги такого рода — решение для тех, кто стремится к оптимизации расходов, но не готов экономить на качестве! Хотите получить эффективное и своевременное ведение всех процессов и составление всех видов отчетов, гибкое управление, консультации и помощь в любой ситуации? Заказывайте бухгалтерские услуги в компании «ШКОЛА БИЗНЕСА» через форму заявки на сайте или по телефону.</p>
      </Partition>
    </Suspense>
  );
};
