
import React from 'react';
import types from "prop-types";

import cn from 'classnames';
import styles from './default.module.scss';


function Comment({ className, children }) {
  return (
    <p className={cn(styles['text'], className)}>{ children }</p>
  );
}

Comment.propTypes = {
  className: types.string,
  children: types.any,
};

Comment.defaultProps = {
  className: null,
  children: 'No content Text Comment',
};

export default Comment;
