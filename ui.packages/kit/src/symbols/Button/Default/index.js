
import types from 'prop-types';
import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


const MODE_PRIMARY = 'primary';
const MODE_SUCCESS = 'success';


export default function Button({ className, children, type, mode, disabled, ...props }) {
  const buttonClassName = cn(styles['button'], className, {
    [styles['mode--primary']]: mode === MODE_PRIMARY,
    [styles['mode--success']]: mode === MODE_SUCCESS,
  }, {
    [styles['mode--disabled']]: disabled,
  });

  return (
    <button type={type} className={buttonClassName} disabled={disabled} { ...props }>{ children }</button>
  );
}

Button.propTypes = {
  className: types.string,
  children: types.any,
  mode: types.string,
  disabled: types.bool,
};

Button.defaultProps = {
  className: '',
  children: 'Button',
  mode: 'default',
  disabled: false,
};
