
import { Header, Block } from '@ui.packages/kit';

import React from 'react';

import styles from './default.module.scss';


export default function Description() {
  return (
    <section className={styles['wrapper']}>
      <header className={styles['header']}>
        <Header>Безопасность труда</Header>
      </header>
      <article className={styles['content']}>
        <div className={styles['row']}>
          <div className={styles['col']}>
            <Block title="Охрана труда" />
          </div>
          <div className={styles['col']}>
            <Block title="Пожарная безопасность" />
          </div>
        </div>
        <div className={styles['row']}>
          <div className={styles['col']}>
            <Block title="Экологическая безопасность" />
          </div>
          <div className={styles['col']}>
            <Block title="Антитеррористическая безопасность" />
          </div>
        </div>
        <div className={styles['row']}>
          <div className={styles['col']}>
            <Block title="Гражданская оборона и чрезвычайные ситуации" />
          </div>
          <div className={styles['col']}>
            <Block title="Промышленная безопасность" />
          </div>
        </div>
      </article>
    </section>
  );
}
