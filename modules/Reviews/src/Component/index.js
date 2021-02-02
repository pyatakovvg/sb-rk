
import { BreadcrumbLink, Breadcrumbs, BreadcrumbTitle, PartitionLayout } from '@ui.packages/kit';
import { Header, Image } from '@ui.packages/kit';

import React, { useEffect } from 'react';

import img1 from './imgs/pgs.jpg';
import img2 from './imgs/ab.png';
import img3 from './imgs/ftbmrk.png';
import img4 from './imgs/tdr.jpg';

import styles from './default.module.scss';


export default function ReviewsPage() {

  useEffect(function initPage() {
    document.title = process.env['REACT_APP_WEBSITE_NAME'] + ' - Отзывы';
  });

  return (
    <PartitionLayout>
      <div className={styles['header']}>
        <div className={styles['breadcrumbs']}>
          <Breadcrumbs>
            <BreadcrumbLink title="Главная" href="/" />
            <BreadcrumbTitle title="Отзывы" />
          </Breadcrumbs>
        </div>
        <Header>Отзывы клиентов</Header>
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
    </PartitionLayout>
  );
};
