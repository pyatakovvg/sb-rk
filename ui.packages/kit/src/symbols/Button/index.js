
import React from 'react';
import types from 'prop-types';

import Default from './Default';
import Context from './Context';


export default function ButtonFactory({ form, ...props }) {
  switch(form) {
    case ButtonFactory.FORM_CONTEXT: return <Context { ...props } />
    default: return <Default { ...props } />;
  }
}

ButtonFactory.MODE_DANGER = 'danger';
ButtonFactory.MODE_PRIMARY = 'primary';
ButtonFactory.MODE_SUCCESS = 'success';

ButtonFactory.TYPE_RESET = 'reset';
ButtonFactory.TYPE_SUBMIT = 'submit';

ButtonFactory.FORM_CONTEXT = 'context';

ButtonFactory.propTypes = {
  className: types.string,
  children: types.any,
  type: types.oneOf(['button', ButtonFactory.TYPE_RESET, ButtonFactory.TYPE_SUBMIT]),
  mode: types.oneOf(['default', ButtonFactory.MODE_PRIMARY, ButtonFactory.MODE_SUCCESS, ButtonFactory.MODE_DANGER]),
  form: types.oneOf(['default', ButtonFactory.FORM_CONTEXT]),
  disabled: types.bool,
};

ButtonFactory.defaultProps = {
  className: null,
  children: null,
  type: 'button',
  mode: 'default',
  form: 'default',
  disabled: false,
};
