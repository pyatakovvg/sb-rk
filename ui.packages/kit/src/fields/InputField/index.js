
import React from 'react';
import types from 'prop-types';
import { Field } from 'redux-form';

import Input from '../../symbols/Input';

import styles from './default.module.scss';


const ComponentField = ({ input, mode, meta: { touched, error }, ...props }) => {
  if (touched) {
    if (error) {
      mode = 'danger';
    }
  }

  return (
    <div className={styles['wrapper']}>
      <Input mode={mode} {...input} {...props} />
      {(touched && error) && (
        <div className={styles['error']}>
          <p className={styles['text']}>{ error }</p>
        </div>
      )}
    </div>
  );
};

export default function InputField({ name, ...props }) {
  return (
    <Field name={name} {...props} component={ComponentField} />
  );
}

InputField.propTypes = {
  className: types.string,
  name: types.string,
  disabled: types.bool,
};
