
import { BreadcrumbLink, Breadcrumbs, BreadcrumbTitle } from "@ui.packages/kit";

import React, { lazy, Suspense, useEffect } from 'react';

import styles from './default.module.scss';


const Item = lazy(() => import(/* webpackChunkName: "item-services" *//* webpackMode: "lazy" */'./Item'));
const Partition = lazy(() => import(/* webpackChunkName: "partition" *//* webpackMode: "lazy" */'../../Layouts/Partition'));


export default function ServicesPage() {

  useEffect(function initPage() {
    document.title = process.env['REACT_APP_WEBSITE_NAME'] + ' - Услуги';
    document.querySelector('#scroll').scroll(0, 0);
  });

  return (
    <Suspense fallback={null}>
      <Partition className={styles['background']}>
        <div className={styles['header']}>
          <div className={styles['breadcrumbs']}>
            <Breadcrumbs>
              <BreadcrumbLink title="Главная" href="/" />
              <BreadcrumbTitle title="Услуги" />
            </Breadcrumbs>
          </div>
          <h2 className={styles['title']}>Наши услуги для Вас</h2>
        </div>
        <div className={styles['services']}>
          <div className={styles['service']}>
            <Item icon="far fa-money-bill-alt" title="Бухгалтерское сопровождение" href="/services/bookkeeping">
              Любая фирма с момента открытия должна взаимодействовать с многочисленными государственными и частными организациями. Почти всегда эти взаимоотношения имеют юридическую и документальную основу.
              Любая фирма с момента открытия должна взаимодействовать с многочисленными государственными и частными организациями. Почти всегда эти взаимоотношения имеют юридическую и документальную основу.
            </Item>
          </div>
          <div className={styles['service']}>
            <Item icon="fas fa-balance-scale" title="Юридическое сопровождение" href="/services/legal" isReverseContent>
              Любая фирма с момента открытия должна взаимодействовать с многочисленными государственными и частными организациями. Почти всегда эти взаимоотношения имеют юридическую и документальную основу.
            </Item>
          </div>
          <div className={styles['service']}>
            <Item icon="fas fa-link" title="Сопровождение по уголовным делам" href="/services/criminal">
              Любая фирма с момента открытия должна взаимодействовать с многочисленными государственными и частными организациями. Почти всегда эти взаимоотношения имеют юридическую и документальную основу.
            </Item>
          </div>
          <div className={styles['service']}>
            <Item icon="fas fa-users" title="Кадровое сопровождение" href="/services/personnel" isReverseContent>
              Любая фирма с момента открытия должна взаимодействовать с многочисленными государственными и частными организациями. Почти всегда эти взаимоотношения имеют юридическую и документальную основу.
            </Item>
          </div>
          <div className={styles['service']}>
            <Item icon="fas fa-percent" title="Независимая оценка и экспертиза" href="/services/expertise">
              Любая фирма с момента открытия должна взаимодействовать с многочисленными государственными и частными организациями. Почти всегда эти взаимоотношения имеют юридическую и документальную основу.
            </Item>
          </div>
          <div className={styles['service']}>
            <Item icon="fas fa-user-shield" title="Безопасность труда" href="/services/safety" isReverseContent>
              Любая фирма с момента открытия должна взаимодействовать с многочисленными государственными и частными организациями. Почти всегда эти взаимоотношения имеют юридическую и документальную основу.
            </Item>
          </div>
        </div>
      </Partition>
    </Suspense>
  );
};
