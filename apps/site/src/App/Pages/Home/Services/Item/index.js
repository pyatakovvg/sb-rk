
import React from 'react';
import { Link } from 'react-router-dom';

import cn from 'classnames';
import styles from "./default.module.scss";


export default function ServiceItem({ icon, title, children, href }) {

  return (
    <div className={styles['wrapper']}>
      <div className={styles['logo']}>
        <span className={cn(styles['icon'], icon)} />
      </div>
      <div className={styles['title']}>{ title }</div>
      <div className={styles['description']}>{ children }</div>
      <div className={styles['more']}>
        <Link className={styles['link']} to={href}>Подробнее...</Link>
      </div>
    </div>
  );
};
