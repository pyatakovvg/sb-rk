
import React from 'react';
import types from "prop-types";

import cn from 'classnames';
import styles from './default.module.scss';


function Header1({ className, children }) {
  return (
    <h1 className={cn(styles['header'], className)}>{ children }</h1>
  );
}

Header1.propTypes = {
  className: types.string,
  children: types.any,
};

Header1.defaultProps = {
  className: null,
  children: 'No content Header1',
};

export default Header1;
