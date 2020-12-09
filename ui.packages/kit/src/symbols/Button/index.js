
import types from 'prop-types';
import React from 'react';

import Default from './Default';
import Context from './Context';


const TYPE_SUBMIT = 'submit';
const TYPE_RESET = 'reset';

const MODE_PRIMARY = 'primary';
const MODE_SUCCESS = 'success';

const FORM_CONTEXT = 'context';


export default function ButtonFactory({ form, ...props }) {
  switch(form) {
    case FORM_CONTEXT: return <Context { ...props } />
    default: return <Default { ...props } />;
  }
}

ButtonFactory.propTypes = {
  className: types.string,
  children: types.any,
  type: types.oneOf([TYPE_RESET, TYPE_SUBMIT, 'button']),
  mode: types.oneOf([MODE_PRIMARY, MODE_SUCCESS, 'default']),
  form: types.oneOf([FORM_CONTEXT, 'default']),
  disabled: types.bool,
};

ButtonFactory.defaultProps = {
  className: '',
  children: 'Button',
  type: 'button',
  mode: 'default',
  form: 'default',
  disabled: false,
};
