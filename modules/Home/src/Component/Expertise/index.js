
import { Header, Block } from '@ui.packages/kit';

import React from 'react';

import styles from './default.module.scss';


export default function Description() {
  return (
    <section className={styles['wrapper']}>
      <header className={styles['header']}>
        <Header>Независимая оценка и экспертиза</Header>
      </header>
      <article className={styles['content']}>
        <div className={styles['row']}>
          <div className={styles['col']}>
            <Block title="Независимая оценка недвижимого имущества" />
          </div>
          <div className={styles['col']}>
            <Block title="Независимая оценка движимого имущества" />
          </div>
        </div>
        <div className={styles['row']}>
          <div className={styles['col']}>
            <Block title="Оспаривание кадастровой стоимости" />
          </div>
          <div className={styles['col']}>
            <Block title="Автотехническая экспертиза" />
          </div>
        </div>
        <div className={styles['row']}>
          <div className={styles['col']}>
            <Block title="Строительно-техническая экспертиза" />
          </div>
          <div className={styles['col']}>
            <Block title="Судебная экспертиза" />
          </div>
        </div>
      </article>
    </section>
  );
}
