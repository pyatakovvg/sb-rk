
import React from 'react';
import types from "prop-types";

import cn from 'classnames';
import styles from './default.module.scss';


function Header2({ className, children }) {
  return (
    <h2 className={cn(styles['header'], className)}>{ children }</h2>
  );
}

Header2.propTypes = {
  className: types.string,
  children: types.any,
};

Header2.defaultProps = {
  className: null,
  children: 'No content Header2',
};

export default Header2;
