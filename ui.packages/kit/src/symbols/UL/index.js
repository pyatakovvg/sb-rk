
import React from 'react';

import cn from 'classnames';
import './default.module.scss';
import types from "prop-types";
import Li from "../LI";


export default function Ul({ className, children }) {
  const headerClassName = cn('ul', className);
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
