
import React, {lazy, Suspense, useEffect} from 'react';

import styles from './default.module.scss';


const Header = lazy(() => import(/* webpackChunkName: "layout-main-header" *//* webpackMode: "lazy" */'./Header'));
const Footer = lazy(() => import(/* webpackChunkName: "layout-footer" *//* webpackMode: "lazy" */'../Footer'));


export default function Layout({ children }) {

  useEffect(function initPage() {
    document.querySelector('#scroll').scroll(0, 0);
  });

  return (
    <div id="scroll" className={styles['wrapper']}>
      <div className={styles['controls']}>
        <Suspense fallback={null}>
          <Header />
        </Suspense>
      </div>
      <section className={styles['content']}>
        { children }
      </section>
      <footer className={styles['footer']}>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </footer>
    </div>
  );
};
