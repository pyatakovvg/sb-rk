
import React from 'react';
import types from "prop-types";

import cn from 'classnames';
import styles from './default.module.scss';


function Header3({ className, children }) {
  return (
    <h3 className={cn(styles['header'], className)}>{ children }</h3>
  );
}

Header3.propTypes = {
  className: types.string,
  children: types.any,
};

Header3.defaultProps = {
  className: null,
  children: 'No content Header3',
};

export default Header3;
