
import React from 'react';
import types from 'prop-types';
import { Field } from 'redux-form';

import Range from '../symbols/Range';


const ComponentField = ({ input, mode, ...props }) => {
  return (
    <Range {...input} {...props} />
  );
};

function RangeField({ name, ...props }) {
  return (
    <Field name={name} {...props} component={ComponentField} />
  );
}

RangeField.propTypes = {
  step: types.number,
  min: types.number,
  max: types.number,
  marker: types.string,
  name: types.string,
  disabled: types.bool,
};

export default RangeField;
