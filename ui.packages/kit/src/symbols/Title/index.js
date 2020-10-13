
import React from 'react';
import types from 'prop-types';

import cn from 'classnames';
import styles from "./default.module.scss";


export default function Title({ className, children }) {
  const titleClassName = cn(styles['title'], className);
  return (
    <h2 className={titleClassName}>{ children }</h2>
  );
}

Title.propTypes = {
  className: types.string,
  children: types.string,
};

Title.defaultProps = {
  className: null,
  children: 'No title',
};
