
import React from 'react';
import types from 'prop-types';

import cn from 'classnames';
import styles from './default.module.scss';


export default function CustomTitle({ className, title }) {
  return (
    <div className={cn(styles['item'], className)}>
      <span className={styles['title']}>{ title }</span>
    </div>
  );
}

CustomTitle.propTypes = {
  className: types.string,
  title: types.string,
};

CustomTitle.defaultProps = {
  className: '',
  title: '',
};
