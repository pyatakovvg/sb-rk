
import { Header, Block } from '@ui.packages/kit';

import React from 'react';

import styles from './default.module.scss';


export default function Description() {
  return (
    <section className={styles['wrapper']}>
      <header className={styles['header']}>
        <Header>Бизнес-консультирование</Header>
      </header>
      <article className={styles['content']}>
        <div className={styles['row']}>
          <div className={styles['col']}>
            <Block title="Открыие бизнеса" />
          </div>
          <div className={styles['col']}>
            <Block title="Развитие бизнеса" />
          </div>
        </div>
        <div className={styles['row']}>
          <div className={styles['col']}>
            <Block title="Оптимизация затрат и издержек" />
          </div>
          <div className={styles['col']}>
            <Block title="Увеличение прибыли" />
          </div>
        </div>
        <div className={styles['row']}>
          <div className={styles['col']}>
            <Block title="Продвижение бизнеса" />
          </div>
          <div className={styles['col']} />
        </div>
      </article>
    </section>
  );
}
