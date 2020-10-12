
import React, { lazy, Suspense } from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


const Header = lazy(() => import(/* webpackChunkName: "layout-header" *//* webpackMode: "lazy" */'./Header'));
const Footer = lazy(() => import(/* webpackChunkName: "layout-footer" *//* webpackMode: "lazy" */'../Footer'));


export default function Partition({ children }) {
  return (
    <article id="scroll" className={styles['wrapper']}>
      <div className={cn(styles['header'])}>
        <Suspense fallback={null}>
          <Header />
        </Suspense>
      </div>
      <article className={styles['content']}>
        <div className={styles['content__block']}>
          { children }
        </div>
      </article>
      <footer className={styles['footer']}>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </footer>
    </article>
  );
};
