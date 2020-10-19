
import React from 'react';
import types from 'prop-types';
import { NavLink } from "react-router-dom";

import SubMenu from '../SubMenu';

import cn from 'classnames';
import styles from './default.module.scss';


function MenuItem({ title, href, subMenu }) {
  if ( !! subMenu.length) {
    return (
      <span className={styles['sub-item']}>
        <NavLink to={href} className={styles['item']} activeClassName={styles['item--active']} end={ ! subMenu.length}>
          <span className={styles['text']}>{ title }</span>
          <span className={cn(styles['arrow'], 'fas fa-caret-down')} />
        </NavLink>
        <SubMenu className={styles['sub-item__menu']} menu={subMenu} />
      </span>
    );
  }
  return (
    <NavLink to={href} className={styles['item']} activeClassName={styles['item--active']} end={ ! subMenu.length}>
      <span className={styles['text']}>{ title }</span>
    </NavLink>
  );
}

MenuItem.propTypes = {
  title: types.string,
  href: types.string,
  subMenu: types.array,
};

MenuItem.defaultProps = {
  title: 'No title',
  href: '/',
  subMenu: [],
};

export default MenuItem;
