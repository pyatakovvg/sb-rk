
import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


export default function Phone() {

  return (
    <div className={styles['wrapper']}>
      <div className={styles['logo']}>
        <span className={cn(styles['icon'], 'far fa-envelope')} />
      </div>
      <div className={styles['content']}>
        <a className={styles['link']} href="mailto:sb-rk@mail.ru" target="_blank" rel="noreferrer">sb-rk@mail.ru</a>
      </div>
    </div>
  );
}
