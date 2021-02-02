
import { Header, Text } from '@ui.packages/kit';

import React from 'react';
import types from 'prop-types';

import cn from 'classnames';
import styles from './default.module.scss';


function Block({ icon, title, content }) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['logo']}>
        <span className={cn(styles['icon'], icon)} />
      </div>
      <div className={styles['content']}>
        {title && (
          <div className={styles['title']}>
          <Header level={3}>{ title }</Header>
          </div>
        )}
        {content && (
          <div className={styles['description']}>
            <Text type={Text.TYPE_BODY}>{ content }</Text>
          </div>
        )}
      </div>
    </div>
  );
}

Block.propTypes = {
  icon: types.string,
  title: types.string,
  content: types.string,
};

Block.defaultProps = {
  icon: 'far fa-arrow-alt-circle-right',
  title: null,
  content: null,
};

export default Block;
