
import React from 'react';
import { Link } from 'react-router-dom';

import cn from 'classnames';
import styles from "./default.module.scss";


export default function ServiceItem({ icon, title, children, href, isReverseContent }) {

  const wrapperClassName = cn(styles['wrapper'], {
    [styles['wrapper--reverse']]: isReverseContent,
  });

  return (
    <div className={wrapperClassName}>
      <div className={styles['logo']}>
        <span className={cn(styles['icon'], icon)} />
      </div>
      <div className={styles['content']}>
        <Link className={styles['title']} to={href}>{ title }</Link>
        <div className={styles['description']}>{ children }</div>
        <div className={styles['more']}>
          <Link className={styles['link']} to={href}>Узнать больше</Link>
        </div>
      </div>
    </div>
  );
};
