
import types from 'prop-types';
import { useMatch, useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


function ItemLink({ href, title }) {
  const isActive = useMatch(href);
  const navigate = useNavigate();

  function handleClick() {
    navigate(href);
  }

  return (
    <div className={cn(styles['list__item'], { [styles['list__item--active']]: isActive })} onClick={handleClick}>
      <span className={styles['list__link']}>{ title }</span>
    </div>
  );
}


export default function SelectTitle({ className, title, children }) {
  const wrapperRef = useRef(null);
  const [ isOpen, setOpenState ] = useState(false);

  function handleCloseList(event) {
    const target = event['target'];
    const { current: wrapperElement } = wrapperRef;

    if (wrapperElement && ! wrapperElement.contains(target)) {
      if (isOpen) {
        setOpenState(false);
      }
    }
  }

  function handleOpenList() {
    setOpenState( ! isOpen);
  }

  useEffect(() => {

    document.querySelector('#scroll').addEventListener('scroll', handleCloseList);
    document.addEventListener('click', handleCloseList);
    return () => {
      document.querySelector('#scroll').removeEventListener('scroll', handleCloseList);
      document.removeEventListener('click', handleCloseList);
    };
  });

  return (
    <div ref={wrapperRef} className={cn(styles['item'], className)}>
      <span className={styles['title']} onClick={handleOpenList}>{ title }<span className={styles['arrow']} /></span>
      {isOpen && (
        <div className={styles['wrapper']}>
          <div className={styles['list']}>
            {React.Children.map(children, (child, index) => (
              <ItemLink key={index} title={child['props']['title']} href={child['props']['href']} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

SelectTitle.propTypes = {
  className: types.string,
  title: types.string,
  children: types.any,
};

SelectTitle.defaultProps = {
  className: '',
  title: '',
  children: null,
};
