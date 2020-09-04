
import React from 'react';
import types from 'prop-types';
import { Link } from 'react-router-dom';

import cn from 'classnames';
import styles from './default.module.scss';


export default function BreadcrumbLink({ className, title, href }) {
  return (
    <div className={cn(styles['item'], className)}>
      <Link className={styles['link']} to={href}>{ title }</Link>
    </div>
  );
}

BreadcrumbLink.propTypes = {
  className: types.string,
  title: types.string,
  href: types.string,
};

BreadcrumbLink.defaultProps = {
  className: '',
  title: '',
  href: '',
};
