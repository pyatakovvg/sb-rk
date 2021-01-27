
import React from 'react';
import types from "prop-types";

import cn from 'classnames';
import styles from './default.module.scss';


function Header4({ className, children }) {
  return (
    <h3 className={cn(styles['header'], className)}>{ children }</h3>
  );
}

Header4.propTypes = {
  className: types.string,
  children: types.any,
};

Header4.defaultProps = {
  className: null,
  children: 'No content Header4',
};

export default Header4;
