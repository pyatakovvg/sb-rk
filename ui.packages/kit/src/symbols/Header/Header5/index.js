
import React from 'react';
import types from "prop-types";

import cn from 'classnames';
import styles from './default.module.scss';


function Header5({ className, children }) {
  return (
    <h5 className={cn(styles['header'], className)}>{ children }</h5>
  );
}

Header5.propTypes = {
  className: types.string,
  children: types.any,
};

Header5.defaultProps = {
  className: null,
  children: 'No content Header5',
};

export default Header5;
