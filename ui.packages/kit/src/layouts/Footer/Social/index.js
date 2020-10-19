
import React from 'react';

import facebook from './facebook.svg';

import styles from './default.module.scss';


export default function Social() {
  return (
    <div className={styles['wrapper']}>
      <a href="#" className={styles['item']} target="_blank">
        <img className={styles['icon']} src={facebook} alt="No img" />
        <span className={styles['text']}>Официальная страница</span>
      </a>
      <a href="#" className={styles['item']} target="_blank">
        <img className={styles['icon']} src={facebook} alt="No img" />
        <span className={styles['text']}>Группа</span>
      </a>
    </div>
  );
}
