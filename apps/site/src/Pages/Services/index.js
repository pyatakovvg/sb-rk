
import { BreadcrumbLink, Breadcrumbs, BreadcrumbTitle, PartitionLayout, Title } from "@ui.packages/kit";

import React, { lazy, Suspense, useEffect } from 'react';

import styles from './default.module.scss';


const Item = lazy(() => import(/* webpackChunkName: "item-services" *//* webpackMode: "lazy" */'./Item'));


export default function ServicesPage() {

  useEffect(function initPage() {
    document.title = process.env['REACT_APP_WEBSITE_NAME'] + ' - Услуги';
  });

  return (
    <PartitionLayout>
      <div className={styles['header']}>
        <div className={styles['breadcrumbs']}>
          <Breadcrumbs>
            <BreadcrumbLink title="Главная" href="/" />
            <BreadcrumbTitle title="Услуги" />
          </Breadcrumbs>
        </div>
        <Title>Наши услуги для Вас</Title>
      </div>
      <Suspense fallback={null}>
        <div className={styles['services']}>
          <div className={styles['service']}>
            <Item number="01" title="Бухгалтерское сопровождение" href="/services/bookkeeping">
              Любая фирма с момента открытия должна взаимодействовать с многочисленными государственными и частными организациями. Почти всегда эти взаимоотношения имеют юридическую и документальную основу.
              Любая фирма с момента открытия должна взаимодействовать с многочисленными государственными и частными организациями. Почти всегда эти взаимоотношения имеют юридическую и документальную основу.
            </Item>
          </div>
          <div className={styles['service']}>
            <Item number="02" title="Юридическое сопровождение" href="/services/legal" isReverseContent>
              Любая фирма с момента открытия должна взаимодействовать с многочисленными государственными и частными организациями. Почти всегда эти взаимоотношения имеют юридическую и документальную основу.
            </Item>
          </div>
          <div className={styles['service']}>
            <Item number="03" title="Сопровождение по уголовным делам" href="/services/criminal">
              Любая фирма с момента открытия должна взаимодействовать с многочисленными государственными и частными организациями. Почти всегда эти взаимоотношения имеют юридическую и документальную основу.
            </Item>
          </div>
          <div className={styles['service']}>
            <Item number="04" title="Кадровое сопровождение" href="/services/personnel" isReverseContent>
              Любая фирма с момента открытия должна взаимодействовать с многочисленными государственными и частными организациями. Почти всегда эти взаимоотношения имеют юридическую и документальную основу.
            </Item>
          </div>
          <div className={styles['service']}>
            <Item number="05" title="Независимая оценка и экспертиза" href="/services/expertise">
              Любая фирма с момента открытия должна взаимодействовать с многочисленными государственными и частными организациями. Почти всегда эти взаимоотношения имеют юридическую и документальную основу.
            </Item>
          </div>
          <div className={styles['service']}>
            <Item number="06" title="Безопасность труда" href="/services/safety" isReverseContent>
              Любая фирма с момента открытия должна взаимодействовать с многочисленными государственными и частными организациями. Почти всегда эти взаимоотношения имеют юридическую и документальную основу.
            </Item>
          </div>
        </div>
      </Suspense>
    </PartitionLayout>
  );
};
