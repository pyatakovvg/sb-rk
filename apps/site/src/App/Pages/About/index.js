
import { BreadcrumbLink, Breadcrumbs, BreadcrumbTitle } from '@ui.packages/kit';

import React, { lazy, Suspense, useEffect } from 'react';

import styles from './default.module.scss';


const Partition = lazy(() => import(/* webpackChunkName: "partition" *//* webpackMode: "lazy" */'../../Layouts/Partition'));


export default function AboutPage() {

  useEffect(() => {
    document.querySelector('#scroll').scroll(0, 0);
  });

  return (
    <Suspense fallback={null}>
      <Partition>
        <div className={styles['header']}>
          <div className={styles['breadcrumbs']}>
            <Breadcrumbs>
              <BreadcrumbLink title="Главная" href="/" />
              <BreadcrumbTitle title="О нас" />
            </Breadcrumbs>
          </div>
          <h2 className={styles['title']}>О нас</h2>
        </div>
      </Partition>
    </Suspense>
  );
};
