
import { Header, Block } from '@ui.packages/kit';

import React from 'react';

import styles from './default.module.scss';


export default function Description() {
  return (
    <section className={styles['wrapper']}>
      <header className={styles['header']}>
        <Header>Юридическое сопровождение</Header>
      </header>
      <article className={styles['content']}>
        <div className={styles['row']}>
          <div className={styles['col']}>
            <Block title="Ежемесячное юридическое сопровождение бизнеса" />
          </div>
          <div className={styles['col']}>
            <Block title="Регистрация/ликвидация предприятий и предпринимателей" />
          </div>
        </div>
        <div className={styles['row']}>
          <div className={styles['col']}>
            <Block title="Внесение изменений в ЕГРЮЛ/ЕГРИП" />
          </div>
          <div className={styles['col']}>
            <Block title="Юридические консультации" />
          </div>
        </div>
        <div className={styles['row']}>
          <div className={styles['col']}>
            <Block title="Составление правовых и процессуальных документов" />
          </div>
          <div className={styles['col']}>
            <Block title="Сопровождение сделок" />
          </div>
        </div>
        <div className={styles['row']}>
          <div className={styles['col']}>
            <Block title="Представительство в судах" />
          </div>
          <div className={styles['col']} />
        </div>
      </article>
    </section>
  );
}
