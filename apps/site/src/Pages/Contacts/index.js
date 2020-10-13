
import { BreadcrumbLink, Breadcrumbs, BreadcrumbTitle, PartitionLayout } from '@ui.packages/kit';
import { Title } from '@ui.packages/kit';

import React, { useEffect } from 'react';

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
    </PartitionLayout>
  );
};
