
import React from 'react';

import styles from "./default.module.scss";


export default function Header() {
  return (
    <div className={styles['header']}>
      <div className={styles['description']}>
        <span className={styles['line-1']} />
        <span className={styles['line-2']} />
        <span className={styles['line-3']} />
        <span className={styles['line-4']} />
        <span className={styles['line-5']} />
        <span className={styles['line-6']} />
        <p className={styles['description__promo']}><span className={styles['yellow']}>Аутсорсинг</span><br/>Вашего<br/>бизнеса</p>
        <p className={styles['description__info']}>занимайтесь только бизнесом<br/> всем остальным займемся мы</p>
      </div>
    </div>
  );
}
