
import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


export default function Partition({ className, children }) {
  return (
    <article className={styles['wrapper']}>
      <div className={cn(styles['header'], className)} />
      <article className={styles['content']}>
        <div className={styles['content__block']}>
          { children }
        </div>
      </article>
    </article>
  );
};
