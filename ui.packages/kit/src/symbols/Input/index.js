
import types from 'prop-types';
import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


const MODE_DANGER = 'danger';


export default function Input({ className, label, require, mode, disabled, ...props }) {
  const wrapperClassName = cn(styles['wrapper'], className, {
    [styles['mode--disabled']]: disabled,
  }, {
    [styles['mode--danger']]: mode === MODE_DANGER,
  });

  return (
    <div className={wrapperClassName}>
      {label && (
        <label className={cn(styles['label'], { [styles['label--require']]: require })}>{ label }</label>
      )}
      <div className={styles['input']}>
        <input className={styles['element']} { ...props } />
      </div>
    </div>
  );
}

Input.propTypes = {
  className: types.string,
  label: types.string,
  require: types.bool,
};

Input.defaultProps = {
  className: '',
  label: null,
  require: false,
};
