
import { BreadcrumbLink, Breadcrumbs, BreadcrumbTitle } from '@ui.packages/kit';

import React, { lazy, Suspense, useEffect } from 'react';

import styles from './default.module.scss';


const Partition = lazy(() => import(/* webpackChunkName: "partition" *//* webpackMode: "lazy" */'../../Layouts/Partition'));


export default function ContactsPage() {

  useEffect(function initPage() {
    document.title = process.env['REACT_APP_WEBSITE_NAME'] + ' - Контакты'
    document.querySelector('#scroll').scroll(0, 0);
  });

  return (
    <Suspense fallback={null}>
      <Partition title="Контакты">
        <div className={styles['header']}>
          <div className={styles['breadcrumbs']}>
            <Breadcrumbs>
              <BreadcrumbLink title="Главная" href="/" />
              <BreadcrumbTitle title="Контакты" />
            </Breadcrumbs>
          </div>
          <h2 className={styles['title']}>Контакты</h2>
        </div>

      </Partition>
    </Suspense>
  );
};
