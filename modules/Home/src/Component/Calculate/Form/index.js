
import { connect } from 'react-redux';
import { reduxForm, getFormValues } from 'redux-form';

import Component from './Component';


function validate(values) {
  const errors = {};

  if ( ! values['organizational-legal-form']) {
    errors['organizational-legal-form'] = 'Необходимо выбрать';
  }

  if ( ! values['tax-system']) {
    errors['tax-system'] = 'Необходимо выбрать';
  }

  if ( ! values['name']) {
    errors['name'] = 'Необходимо заполнить';
  }

  if ( ! values['phone']) {
    errors['phone'] = 'Необходимо заполнить';
  }

  return errors;
}


function matStateToProps(state) {
  console.log(state)
  return {
    formData: getFormValues('calculator')(state),
  };
}


export default connect(
  matStateToProps,
  null,
  null,
)(reduxForm({
  form: 'calculator',
  initialValues: {
    'organizational-legal-form': 'individual-entrepreneur',
    'tax-system': 'sts-income',
    'operations': [10],
    'employees': [0]
  },
  validate,
})(Component));
