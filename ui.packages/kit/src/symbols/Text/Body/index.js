
import React from 'react';
import types from "prop-types";

import cn from 'classnames';
import styles from './default.module.scss';


function Body({ className, children }) {
  return (
    <p className={cn(styles['text'], className)}>{ children }</p>
  );
}

Body.propTypes = {
  className: types.string,
  children: types.any,
};

Body.defaultProps = {
  className: null,
  children: 'No content Text Body',
};

export default Body;
