
import React from 'react';

import cn from 'classnames';
import './default.module.scss';


export default function H3({ className, children }) {
  const headerClassName = cn('h3', className);
  return (
    <h3 className={headerClassName}>{ children }</h3>
  );
}
