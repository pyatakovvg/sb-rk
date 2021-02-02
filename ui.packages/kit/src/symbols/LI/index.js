
import React from 'react';
import types from 'prop-types';

import cn from 'classnames';
import styles from './default.module.scss';


export default function Li({ className, children }) {
  const listClassName = cn(styles['li'], className);
  return (
    <li className={listClassName}>{ children }</li>
  );
}

Li.propTypes = {
  className: types.string,
  children: types.any,
};

Li.defaultProps = {
  className: null,
  children: null,
};
