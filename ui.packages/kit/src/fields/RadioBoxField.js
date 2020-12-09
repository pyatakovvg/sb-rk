
import React from 'react';
import types from 'prop-types';
import { Field } from 'redux-form';

import RadioBox from '../symbols/RadioBox';


function InputField({ input, mode, ...props }) {
  return (
    <RadioBox {...input} {...props} onChange={(data) => {
      input.onChange(data);
      props.onSelect && props.onSelect(data);
    }} />
  );
}

function RadioBoxField({ name, onSelect, ...props }) {
  return (
    <Field name={name} onSelect={onSelect} {...props} component={InputField} />
  );
}

RadioBoxField.propTypes = {
  name: types.string,
  disabled: types.bool,
};

export default RadioBoxField;
