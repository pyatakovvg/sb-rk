
import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


export default function Phone() {

  return (
    <div className={styles['wrapper']}>
      <div className={styles['logo']}>
        <span className={cn(styles['icon'], 'fas fa-map-marker-alt')} />
      </div>
      <div className={styles['content']}>
        295047, Республика Крым, г. Симферополь, ул. Узловая, 10, офис 32
      </div>
    </div>
  );
}
