
import { Header, Text } from '@ui.packages/kit';

import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


export default function Block({ title, content }) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['logo']}>
        <span className={cn(styles['icon'], 'far fa-arrow-alt-circle-right')} />
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
