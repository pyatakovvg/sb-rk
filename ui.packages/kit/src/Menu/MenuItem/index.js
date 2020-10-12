
import React from 'react';
import types from 'prop-types';
import { NavLink } from "react-router-dom";

import styles from './default.module.scss';


function MenuItem({ title, href, hasChildren }) {
  return (
    <NavLink to={href} className={styles['item']} activeClassName={styles['item--active']} end={ ! hasChildren}>
      <span className={styles['text']}>{ title }</span>
    </NavLink>
  );
}

MenuItem.propTypes = {
  title: types.string,
  href: types.string,
  hasChildren: types.bool,
};

MenuItem.defaultProps = {
  title: 'No title',
  href: '/',
  hasChildren: false,
};

export default MenuItem;
