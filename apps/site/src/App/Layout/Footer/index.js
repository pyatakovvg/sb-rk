
import React from 'react';

import styles from './default.module.scss';


export default function Footer() {

  return (
    <footer className={styles['wrapper']}>
      <div className={styles['logotype']}>
        <span className={styles['logo']} />
      </div>
    </footer>
  );
};
