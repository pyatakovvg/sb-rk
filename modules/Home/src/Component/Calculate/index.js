
import { Header } from '@ui.packages/kit';

import React from 'react';

import Form from './Form';

import styles from "./default.module.scss";


export default function Calculate() {
  return (
    <section className={styles['wrapper']}>
      <div className={styles['header']}>
        <Header>Расчет услуги</Header>
      </div>
      <div className={styles['content']}>
        <Form onSubmit={(data) => console.log(data)} />
      </div>
    </section>
  );
}
