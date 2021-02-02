
import React from 'react';
import types from "prop-types";

import cn from 'classnames';
import styles from './default.module.scss';


export default function Ul({ className, children }) {
  const headerClassName = cn(styles['ul'], className);
  return (
    <ul className={headerClassName}>{
      React.Children.map(children, (child) => (
        React.cloneElement(child)
      ))
    }</ul>
  );
}

Ul.propTypes = {
  className: types.string,
  children: types.node,
};

Ul.defaultProps = {
  className: null,
  children: null,
};
