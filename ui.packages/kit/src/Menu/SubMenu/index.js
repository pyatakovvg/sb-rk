
import React from 'react';
import types from 'prop-types';

import SubItem from './MenuItem';

import cn from 'classnames';
import styles from './default.module.scss';


function SubMenu({ className, menu }) {
  return (
    <div className={cn(styles['wrapper'], className)}>
      <div className={styles['menu']}>
        {menu.map((item, index) => <SubItem key={index} href={item['href']} title={item['title']} />)}
      </div>
    </div>
  );
}

SubMenu.propTypes = {
  className: types.string,
  menu: types.array,
};

SubMenu.defaultProps = {
  className: '',
  menu: [],
};

export default SubMenu;
