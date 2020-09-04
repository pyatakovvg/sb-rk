
import types from 'prop-types';
import React from 'react';

import styles from './default.module.scss';


export default function Breadcrumbs({ children }) {
  return (
    <div className={styles['wrapper']}>
      {React.Children.map(children, (child) => {
        return (
          <div className={styles['col']}>
            {React.cloneElement(child, {

            })}
          </div>
        );
      })}
    </div>
  );
}

Breadcrumbs.propTypes = {
  className: types.string,
};

Breadcrumbs.defaultProps = {
  className: '',
};
