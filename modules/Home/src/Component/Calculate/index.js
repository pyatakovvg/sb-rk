
import { Title } from '@ui.packages/kit';

import React from 'react';

import Form from './Form';

import styles from "./default.module.scss";


export default function Header() {
  return (
    <section className={styles['wrapper']}>
      <div className={styles['header']}>
        <Title>Расчет услуги</Title>
      </div>
      <div className={styles['content']}>
        <Form onSubmit={(data) => console.log(data)} />
      </div>
    </section>
  );
}
