
import { Header, Block } from '@ui.packages/kit';

import React from 'react';

import styles from './default.module.scss';


export default function Description() {
  return (
    <section className={styles['wrapper']}>
      <header className={styles['header']}>
        <Header>Аудит</Header>
      </header>
      <article className={styles['content']}>
        <div className={styles['row']}>
          <div className={styles['col']}>
            <Block title="Инициативный аудит" />
          </div>
          <div className={styles['col']}>
            <Block title="Обязательный аудит" />
          </div>
        </div>
        <div className={styles['row']}>
          <div className={styles['col']}>
            <Block title="Внутренний аудит" />
          </div>
          <div className={styles['col']}>
            <Block title="Кадровый аудит" />
          </div>
        </div>
        <div className={styles['row']}>
          <div className={styles['col']}>
            <Block title="Налоговый аудит" />
          </div>
          <div className={styles['col']} />
        </div>
      </article>
    </section>
  );
}
