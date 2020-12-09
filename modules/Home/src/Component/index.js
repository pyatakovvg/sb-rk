
import { MainLayout } from '@ui.packages/kit';

import React, { lazy, Suspense, useEffect } from 'react';

import styles from './default.module.scss';


const Header = lazy(() => import(/* webpackChunkName: "home-header" *//* webpackMode: "lazy" */'./Header'));
const Services = lazy(() => import(/* webpackChunkName: "home-services" *//* webpackMode: "lazy" */'./Services'));
const Other = lazy(() => import(/* webpackChunkName: "home-services" *//* webpackMode: "lazy" */'./Other'));
const Calculate = lazy(() => import(/* webpackChunkName: "home-calculate" *//* webpackMode: "lazy" */'./Calculate'));


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
        <Suspense fallback={null}>
          <Other />
        </Suspense>
        <Suspense fallback={null}>
          <Calculate />
        </Suspense>
      </article>
    </MainLayout>
  );
};
