
import React from 'react';
import types from "prop-types";

import cn from 'classnames';
import styles from './default.module.scss';


function Default({ className, children }) {
  return (
    <p className={cn(styles['text'], className)}>{ children }</p>
  );
}

Default.propTypes = {
  className: types.string,
  children: types.any,
};

Default.defaultProps = {
  className: null,
  children: 'No content Text Default',
};

export default Default;
