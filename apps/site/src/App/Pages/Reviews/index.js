
import { Image } from '@ui.packages/kit';

import React, { lazy, Suspense } from 'react';

import img1 from './imgs/pgs.jpg';
import img2 from './imgs/ab.png';
import img3 from './imgs/ftbmrk.png';
import img4 from './imgs/tdr.jpg';

import styles from './default.module.scss';


const Partition = lazy(() => import(/* webpackChunkName: "partition" *//* webpackMode: "lazy" */'../../Layouts/Partition'));


export default function ReviewsPage() {
  return (
    <Suspense fallback={null}>
      <Partition title="Отзывы">
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
