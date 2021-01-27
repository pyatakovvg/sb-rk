
import { Title } from '@ui.packages/kit';

import React from 'react';

import styles from './default.module.scss';


export default function Description() {
  return (
    <section className={styles['wrapper']}>
      <header className={styles['header']}>
        <Title>Безопасность труда</Title>
      </header>
      <article className={styles['content']}>
        <div className={styles['column']}>
          <h2>Охрана труда</h2>
        </div>
        <div className={styles['column']}>
          <h2>Пожарная безопасность</h2>
        </div>
        <div className={styles['column']}>
          <h2>Экологическая безопасность</h2>
        </div>
        <div className={styles['column']}>
          <h2>Антитеррористическая безопасность</h2>
        </div>
        <div className={styles['column']}>
          <h2>Гражданская оборона и чрезвычайные ситуации</h2>
        </div>
        <div className={styles['column']}>
          <h2>Промышленная безопасность</h2>
        </div>
      </article>
    </section>
  );
}
