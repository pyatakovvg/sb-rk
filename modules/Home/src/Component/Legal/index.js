
import { Title } from '@ui.packages/kit';

import React from 'react';

import styles from './default.module.scss';


export default function Description() {
  return (
    <section className={styles['wrapper']}>
      <header className={styles['header']}>
        <Title>Юридическое сопровождение</Title>
      </header>
      <article className={styles['content']}>
        <div className={styles['column']}>
          <h2>Ежемесячное юридическое сопровождение бизнеса</h2>
        </div>
        <div className={styles['column']}>
          <h2>Регистрация/ликвидация предприятий и предпринимателей</h2>
        </div>
        <div className={styles['column']}>
          <h2>Внесение изменений в ЕГРЮЛ/ЕГРИП</h2>
        </div>
        <div className={styles['column']}>
          <h2>Юридические консультации</h2>
        </div>
        <div className={styles['column']}>
          <h2>Составление правовых и процессуальных документов</h2>
        </div>
        <div className={styles['column']}>
          <h2>Сопровождение сделок</h2>
        </div>
        <div className={styles['column']}>
          <h2>Представительство в судах</h2>
        </div>
      </article>
    </section>
  );
}
