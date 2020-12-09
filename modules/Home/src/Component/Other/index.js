
import { Title } from '@ui.packages/kit';

import React from 'react';

import styles from './default.module.scss';


export default function Services() {
  return (
    <article className={styles['wrapper']}>
      <div className={styles['header']}>
        <Title>Что-то другое</Title>
      </div>
    </article>
  );
}
