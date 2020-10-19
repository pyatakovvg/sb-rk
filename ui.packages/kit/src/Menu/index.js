
import React from 'react';
import types from 'prop-types';

import MenuItem from './MenuItem';

import styles from "./default.module.scss";


export default function Menu({ menu }) {
  return (
    <nav className={styles['navigate']}>
      {menu.map((item, index) => (
        <MenuItem key={index} title={item['title']} href={item['href']} subMenu={item['children']} />
      ))}
    </nav>
  );
};

Menu.propTypes = {
  menu: types.array,
};

Menu.defaultProps = {
  menu: [],
};
