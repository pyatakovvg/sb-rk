
import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


export default function Phone() {

  return (
    <div className={styles['wrapper']}>
      <div className={styles['logo']}>
        <span className={cn(styles['icon'], 'fas fa-phone')} />
      </div>
      <div className={styles['content']}>
        +7 (978) 025 44 25
      </div>
    </div>
  );
}
