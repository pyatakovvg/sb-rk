
import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


const Navigation = lazy(() => import('./Navigation'));


export default function Header() {
  const [isOut, setOut] = useState(false);
  const headerElement = useRef(null);

  useEffect(() => {

    function handleScrollEvent(event) {
      event.preventDefault();
      if (headerElement['current']) {
        const rect = headerElement['current'].getBoundingClientRect();
        setOut(rect['bottom'] <= 0);
      }
    }

    document.querySelector('#scroll').addEventListener('scroll', handleScrollEvent);
    return function cleanup() {
      document.querySelector('#scroll').removeEventListener('scroll', handleScrollEvent);
    };
  });

  return (
    <header ref={headerElement} className={styles['wrapper']}>
      <span className={styles['logo']} />
      <div className={styles['menu']}>
        <Suspense fallback={null}>
          <Navigation />
        </Suspense>
      </div>
      <div className={styles['contacts']}>
        <p className={styles['info']}>Наши контакты:</p>
        <p className={styles['info']}><i className={cn(styles['icon'], "fas fa-phone")} /> +7 (978) 025 44 25</p>
        <p className={styles['info']}><i className={cn(styles['icon'], "far fa-envelope")} /> <a className={styles['link']} target="_blank" rel="noreferrer" href="mailto:sb-rk@mail.ru">sb-rk@mail.ru</a></p>
      </div>
      {isOut}
    </header>
  );
};
