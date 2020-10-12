
import { BreadcrumbLink, Breadcrumbs, BreadcrumbTitle, PartitionLayout } from '@ui.packages/kit';

import React, { useEffect } from 'react';

import styles from './default.module.scss';


export default function ContactsPage() {

  useEffect(function initPage() {
    document.title = process.env['REACT_APP_WEBSITE_NAME'] + ' - Контакты'
    document.querySelector('#scroll').scroll(0, 0);
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
        <h2 className={styles['title']}>Контакты</h2>
      </div>
    </PartitionLayout>
  );
};
