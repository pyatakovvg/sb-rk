
import { MainLayout } from '@ui.packages/kit';

import React, { lazy, Suspense, useEffect } from 'react';

import styles from './default.module.scss';


const Header = lazy(() => import(/* webpackChunkName: "home-header" *//* webpackMode: "lazy" */'./Header'));
const Services = lazy(() => import(/* webpackChunkName: "home-services" *//* webpackMode: "lazy" */'./Services'));


export default function AboutPage() {

  useEffect(function initPage() {
    document.title = process.env['REACT_APP_WEBSITE_NAME'];
  });

  return (
    <MainLayout>
      <article className={styles['wrapper']}>
        <Suspense fallback={null}>
          <Header />
        </Suspense>
        <Suspense fallback={null}>
          <Services />
        </Suspense>
      </article>
    </MainLayout>
  );
};
