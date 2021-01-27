
import { Title } from '@ui.packages/kit';

import React from 'react';

import styles from './default.module.scss';


export default function Description() {
  return (
    <section className={styles['wrapper']}>
      <header className={styles['header']}>
        <Title>Аудит</Title>
      </header>
      <article className={styles['content']}>
        <div className={styles['column']}>
          <h2>Инициативный аудит</h2>
        </div>
        <div className={styles['column']}>
          <h2>Обязательный аудит</h2>
        </div>
        <div className={styles['column']}>
          <h2>Внутренний аудит</h2>
        </div>
        <div className={styles['column']}>
          <h2>Кадровый аудит</h2>
        </div>
        <div className={styles['column']}>
          <h2>Налоговый аудит</h2>
        </div>
      </article>
    </section>
  );
}
