
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
        <div className={styles['columns']}>
          <div className={styles['column']}>
            <Block
              title="Открыие бизнеса"
            />
          </div>
          <div className={styles['column']}>
            <Block
              title="Развитие бизнеса"
            />
          </div>
          <div className={styles['column']}>
            <Block
              title="Оптимизация затрат и издержек"
            />
          </div>
          <div className={styles['column']}>
            <Block
              title="Увеличение прибыли"
            />
          </div>
          <div className={styles['column']}>
            <Block
              title="Продвижение бизнеса"
            />
          </div>
        </div>
      </article>
    </section>
  );
}
