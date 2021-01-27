
import { Title } from '@ui.packages/kit';

import React from 'react';

import styles from './default.module.scss';


export default function Description() {
  return (
    <section className={styles['wrapper']}>
      <header className={styles['header']}>
        <Title>Независимая оценка и экспертиза</Title>
      </header>
      <article className={styles['content']}>
        <div className={styles['column']}>
          <h2>Независимая оценка недвижимого имущества</h2>
        </div>
        <div className={styles['column']}>
          <h2>Независимая оценка движимого имущества</h2>
        </div>
        <div className={styles['column']}>
          <h2>Оспаривание кадастровой стоимости</h2>
        </div>
        <div className={styles['column']}>
          <h2>Автотехническая экспертиза</h2>
        </div>
        <div className={styles['column']}>
          <h2>Строительно-техническая экспертиза</h2>
        </div>
        <div className={styles['column']}>
          <h2>Судебная экспертиза</h2>
        </div>
      </article>
    </section>
  );
}
