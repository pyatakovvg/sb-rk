
import React from 'react';

import cn from 'classnames';
import styles from "./default.module.scss";


export default function Header({ children, selected, onClick }) {
  return (
    <div className={cn(styles['wrapper'], { [styles['wrapper--selected']]: selected })} onClick={onClick}>
      <span className={styles['label']}>{ children }</span>
    </div>
  );
}
