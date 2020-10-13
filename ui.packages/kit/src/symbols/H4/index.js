
import React from 'react';

import cn from 'classnames';
import './default.module.scss';


export default function H4({ className, children }) {
  const headerClassName = cn('h4', className);
  return (
    <h4 className={headerClassName}>{ children }</h4>
  );
}
