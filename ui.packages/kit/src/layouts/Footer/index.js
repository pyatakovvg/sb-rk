
import React, { lazy, Suspense } from 'react';

import styles from './default.module.scss';


const Address = lazy(() => import('./Address'));
const Phone = lazy(() => import('./Phone'));
const Email = lazy(() => import('./Email'));


export default function Footer() {

  return (
    <footer className={styles['wrapper']}>
      <div className={styles['content']}>
        <div className={styles['logotype']}>
          <span className={styles['logo']} />
        </div>
        <div className={styles['information']}>
          <div className={styles['address']}>
            <Suspense fallback={null}>
              <Address />
            </Suspense>
          </div>
          <div className={styles['phone']}>
            <Suspense fallback={null}>
              <Phone />
            </Suspense>
          </div>
          <div className={styles['email']}>
            <Suspense fallback={null}>
              <Email />
            </Suspense>
          </div>
        </div>
      </div>
    </footer>
  );
};
