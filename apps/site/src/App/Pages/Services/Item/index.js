
import React from 'react';
import types from 'prop-types';
import { Link } from 'react-router-dom';

import cn from 'classnames';
import styles from "./default.module.scss";


export default function ServiceItem({ number, title, children, href, isReverseContent }) {

  const wrapperClassName = cn(styles['wrapper'], {
    [styles['wrapper--reverse']]: isReverseContent,
  });

  return (
    <div className={wrapperClassName}>
      <div className={styles['logo']}>
        <span className={cn(styles['icon'])}>{ number }</span>
      </div>
      <div className={styles['content']}>
        <Link className={styles['title']} to={ href }>{ title }</Link>
        <div className={styles['description']}>{ children }</div>
        <div className={styles['more']}>
          <Link className={styles['link']} to={ href }>Узнать больше</Link>
        </div>
      </div>
    </div>
  );
};

ServiceItem.propTypes = {
  number: types.string,
  title: types.string,
  children: types.any,
  href: types.string,
  isReverseContent: types.bool,
};

ServiceItem.defaultProps = {
  number: '00',
  title: 'No title',
  children: null,
  href: '#',
  isReverseContent: false,
};
