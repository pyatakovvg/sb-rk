
import { BreadcrumbLink, Breadcrumbs, BreadcrumbTitle, Image } from '@ui.packages/kit';

import React, { lazy, Suspense, useEffect } from 'react';

import img1 from './imgs/pgs.jpg';
import img2 from './imgs/ab.png';
import img3 from './imgs/ftbmrk.png';
import img4 from './imgs/tdr.jpg';

import styles from './default.module.scss';


const Partition = lazy(() => import(/* webpackChunkName: "partition" *//* webpackMode: "lazy" */'../../Layouts/Partition'));


export default function ReviewsPage() {

  useEffect(function initPage() {
    document.title = process.env['REACT_APP_WEBSITE_NAME'] + ' - Отзывы';
    document.querySelector('#scroll').scroll(0, 0);
  });

  return (
    <Suspense fallback={null}>
      <Partition title="Отзывы">
        <div className={styles['header']}>
          <div className={styles['breadcrumbs']}>
            <Breadcrumbs>
              <BreadcrumbLink title="Главная" href="/" />
              <BreadcrumbTitle title="Отзывы" />
            </Breadcrumbs>
          </div>
          <h2 className={styles['title']}>Отзывы клиентов</h2>
        </div>
        <div className={styles['row']}>
          <div className={styles['col']}>
            <div className={styles['picture']}>
              <Image src={img1} />
            </div>
          </div>
          <div className={styles['col']}>
            <div className={styles['picture']}>
              <Image src={img2} />
            </div>
          </div>
          <div className={styles['col']}>
            <div className={styles['picture']}>
              <Image src={img3} />
            </div>
          </div>
          <div className={styles['col']}>
            <div className={styles['picture']}>
              <Image src={img4} />
            </div>
          </div>
        </div>
      </Partition>
    </Suspense>
  );
};
