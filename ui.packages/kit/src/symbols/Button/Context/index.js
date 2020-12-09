
import types from 'prop-types';
import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


const MODE_PRIMARY = 'primary';


export default function Button({ className, children, type, mode, disabled, ...props }) {
  const buttonClassName = cn(styles['button'], className, {
    [styles['mode--disabled']]: disabled,
  }, {
    [styles['mode--primary']]: mode === MODE_PRIMARY,
  });

  return (
    <button type={type} className={buttonClassName} disabled={disabled} { ...props }>{ children }</button>
  );
}

Button.propTypes = {
  className: types.string,
  children: types.any,
  disabled: types.bool,
};

Button.defaultProps = {
  className: '',
  children: 'Button',
  mode: 'default',
  disabled: false,
};
