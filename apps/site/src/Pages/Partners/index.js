
import { Breadcrumbs, BreadcrumbTitle, BreadcrumbLink, PartitionLayout } from '@ui.packages/kit';
import { Title, Image } from '@ui.packages/kit';

import React, { useEffect } from 'react';

import img1 from './imgs/ab.jpg';
import img2 from './imgs/Autopolka.jpg';
import img3 from './imgs/finds.png';
import img4 from './imgs/pgs.jpg';
import img5 from './imgs/ftbb.jpg';
import img6 from './imgs/garadj.jpg';

import styles from './default.module.scss';


export default function PartnersPage() {

  useEffect(function initPage() {
    document.title = process.env['REACT_APP_WEBSITE_NAME'] + ' - Партнеры';
  });

  return (
    <PartitionLayout>
      <div className={styles['header']}>
        <div className={styles['breadcrumbs']}>
          <Breadcrumbs>
            <BreadcrumbLink title="Главная" href="/" />
            <BreadcrumbTitle title="Партнеры" />
          </Breadcrumbs>
        </div>
        <Title>Наши партнеры</Title>
      </div>
      <div className={styles['row']}>
        <div className={styles['col']}>
          <div className={styles['picture']}>
            <Image src={img1} />
          </div>
          <span className={styles['picture__title']}>Архитектурное Бюро</span>
        </div>
        <div className={styles['col']}>
          <a className={styles['link']} href="http://finds.su/" target="_blank" rel="noreferrer">
            <div className={styles['picture']}>
              <Image src={img3} />
            </div>
            <span className={styles['picture__title']}>Финансовый деловой союз</span>
          </a>
        </div>
        <div className={styles['col']}>
          <a className={styles['link']} href="http://autopolka.ru/" target="_blank" rel="noreferrer">
            <div className={styles['picture']}>
              <Image src={img2} />
            </div>
            <span className={styles['picture__title']}>"Автополка" сеть магазинов</span>
          </a>
        </div>
        <div className={styles['col']}>
          <a className={styles['link']} href="https://vk.com/ftbrk" target="_blank" rel="noreferrer">
            <div className={styles['picture']}>
              <Image src={img5} />
            </div>
            <span className={styles['picture__title']}>Спортивная федерация тайского<br/>бокса муйтай</span>
          </a>
        </div>
        <div className={styles['col']}>
          <a className={styles['link']} href="https://pgsproekt.ru/" target="_blank" rel="noreferrer">
            <div className={styles['picture']}>
              <Image src={img4} />
            </div>
            <span className={styles['picture__title']}>«ПГС проект»</span>
          </a>
        </div>
        <div className={styles['col']}>
          <a className={styles['link']} href="https://vk.com/garage_simf" target="_blank" rel="noreferrer">
            <div className={styles['picture']}>
              <Image src={img6} />
            </div>
            <span className={styles['picture__title']}>Барбершоп "ГАРАЖ"</span>
          </a>
        </div>
      </div>
    </PartitionLayout>
  );
};
