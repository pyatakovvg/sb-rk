
import { BreadcrumbLink, Breadcrumbs, BreadcrumbTitle, PartitionLayout, Title } from '@ui.packages/kit';

import React, { useEffect } from 'react';

import styles from './default.module.scss';


export default function AboutPage() {

  useEffect(function initPage() {
    document.title = process.env['REACT_APP_WEBSITE_NAME'] + ' - О нас'
  });

  return (
      <PartitionLayout>
        <div className={styles['header']}>
          <div className={styles['breadcrumbs']}>
            <Breadcrumbs>
              <BreadcrumbLink title="Главная" href="/" />
              <BreadcrumbTitle title="О нас" />
            </Breadcrumbs>
          </div>
          <Title>О нас</Title>
        </div>
      </PartitionLayout>
  );
};
