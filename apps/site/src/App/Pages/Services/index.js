
import { BreadcrumbLink, Breadcrumbs, BreadcrumbTitle } from "@ui.packages/kit";

import React, { lazy, Suspense, useEffect } from 'react';

import styles from './default.module.scss';


const Partition = lazy(() => import(/* webpackChunkName: "partition" *//* webpackMode: "lazy" */'../../Layouts/Partition'));


export default function ServicesPage() {

  useEffect(() => {
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
      </Partition>
    </Suspense>
  );
};
