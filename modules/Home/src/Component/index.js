
import { MainLayout } from '@ui.packages/kit';

import React, { useEffect } from 'react';

import styles from './default.module.scss';


import Header from './Header';
import Description from './Description';
import Bisenes from './Bisenes';
import Bookkeeping from './Bookkeeping';
import Legal from './Legal';
import Expertise from './Expertise';
import Safety from './Safety';
import Audit from './Audit';
// import Services from './Services';
// import Other from './Other';
import Calculate from './Calculate';


export default function AboutPage() {

  useEffect(function initPage() {
    document.title = process.env['REACT_APP_WEBSITE_NAME'];
  });

  return (
    <MainLayout>
      <article className={styles['wrapper']}>
        <Header />
        <Description />
        <Bisenes />
        <Bookkeeping />
        <Legal />
        <Expertise />
        <Safety />
        <Audit />
        {/*<Services />*/}
        {/*<Other />*/}
        <Calculate />
      </article>
    </MainLayout>
  );
};
