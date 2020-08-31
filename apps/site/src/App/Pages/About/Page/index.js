
import React from 'react';

import styles from './default.module.scss';


export default function AboutPage() {
  return (
    <article className={styles['wrapper']}>
      <div className={styles['header']}>
        <h3 className={styles['title']}>О нас</h3>
      </div>
      <article className={styles['content']}>

      </article>
    </article>
  );
};
