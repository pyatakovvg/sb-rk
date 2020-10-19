
import React from 'react';
import types from 'prop-types';
import { NavLink } from "react-router-dom";

import styles from './default.module.scss';


function SubMenuItem({ title, href }) {
  return (
    <NavLink to={href} className={styles['item']} activeClassName={styles['item--active']} end={true}>
      <span className={styles['text']}>{ title }</span>
    </NavLink>
  );
}

SubMenuItem.propTypes = {
  title: types.string,
  href: types.string,
};

SubMenuItem.defaultProps = {
  title: 'No title',
  href: '/',
};

export default SubMenuItem;
