
import React, { lazy, Suspense, useEffect } from 'react';

import styles from './default.module.scss';


const Services = lazy(() => import('./Services'));


export default function AboutPage() {

  useEffect(() => {
    document.querySelector('#scroll').scroll(0, 0);
  });

  return (
    <article className={styles['wrapper']}>
      <div className={styles['header']}>
        <div className={styles['description']}>
          <span className={styles['line-1']} />
          <span className={styles['line-2']} />
          <span className={styles['line-3']} />
          <span className={styles['line-4']} />
          <span className={styles['line-5']} />
          <span className={styles['line-6']} />
          <p className={styles['description__promo']}><span className={styles['yellow']}>Аутсорсинг</span><br/>Вашего<br/>бизнеса</p>
          <p className={styles['description__info']}>занимайтесь только бизнесом<br/> всем остальным займемся мы</p>
        </div>
      </div>
      <Suspense fallback={null}>
        <Services />
      </Suspense>
    </article>
  );
};
