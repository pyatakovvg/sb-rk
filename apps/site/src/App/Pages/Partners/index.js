
import React, { lazy, Suspense } from 'react';

import ABImage from './ab.jpg';
import AutopolkaImage from './Autopolka.jpg';
import FindsImage from './finds.png';

import styles from './default.module.scss';


const Partition = lazy(() => import(/* webpackChunkName: "partition" *//* webpackMode: "lazy" */'../../Layouts/Partition'));


function Picture({ children }) {
  return (
    <div className={styles['picture']}>
      { children }
    </div>
  );
}


export default function PartnersPage() {
  return (
    <Suspense fallback={null}>
      <Partition title="Наши партнеры">
        <div className={styles['row']}>
          <div className={styles['col']}>
            <Picture>
              <img src={ABImage} alt="jhk" />
            </Picture>
          </div>
          <div className={styles['col']}>
            <Picture>
              <img src={AutopolkaImage} alt="jhk" />
            </Picture>
          </div>
          <div className={styles['col']}>
            <Picture>
              <img src={FindsImage} alt="jhk" />
            </Picture>
          </div>
        </div>
      </Partition>
    </Suspense>
  );
};
