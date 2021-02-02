
import { BreadcrumbLink, Breadcrumbs, BreadcrumbTitle, PartitionLayout } from '@ui.packages/kit';
import { Title } from '@ui.packages/kit';

import React, { useEffect } from 'react';

import MyMap from "./Map";

import cn from 'classnames';
import styles from './default.module.scss';


export default function ContactsPage() {

  useEffect(function initPage() {
    document.title = process.env['REACT_APP_WEBSITE_NAME'] + ' - Контакты'
  });

  return (
    <PartitionLayout>
      <div className={styles['header']}>
        <div className={styles['breadcrumbs']}>
          <Breadcrumbs>
            <BreadcrumbLink title="Главная" href="/" />
            <BreadcrumbTitle title="Контакты" />
          </Breadcrumbs>
        </div>
        <Title>Контакты</Title>
      </div>
      <div className={styles['content']}>
        <div className={styles['info']}>
          <div className={styles['line']}>
            <div className={styles['asign']}>
              <span className={cn(styles['icon'], 'fas fa-map-marker-alt')} />
            </div>
            <div className={styles['article']}>
              <div className={styles['text']}>Адрес: 295047, Республика Крым, г.&nbsp;Симферополь, ул.&nbsp;Узловая, 10, офис 32</div>
            </div>
          </div>
          <div className={styles['line']}>
            <div className={styles['asign']}>
              <span className={cn(styles['icon'], 'fas fa-phone')} />
            </div>
            <div className={styles['article']}>
              <div className={styles['text']}>+7 (978) 025 44 25</div>
            </div>
          </div>
          <div className={styles['line']}>
            <div className={styles['asign']}>
              <span className={cn(styles['icon'], 'far fa-envelope')} />
            </div>
            <div className={styles['article']}>
              <div className={styles['text']}>sb-rk@mail.ru</div>
            </div>
          </div>
        </div>
        <div className={styles['map']}>
          <MyMap />
        </div>
      </div>
    </PartitionLayout>
  );
};
