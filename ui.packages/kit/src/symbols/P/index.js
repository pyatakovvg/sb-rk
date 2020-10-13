
import React from 'react';

import cn from 'classnames';
import './default.module.scss';
import types from "prop-types";
import Li from "../LI";


export default function P({ className, children }) {
  const headerClassName = cn('p', className);
  return (
    <p className={headerClassName}>{ children }</p>
  );
}

P.propTypes = {
  className: types.string,
  children: types.any,
};

P.defaultProps = {
  className: null,
  children: null,
};
