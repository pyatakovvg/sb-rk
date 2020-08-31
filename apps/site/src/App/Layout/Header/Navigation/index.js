
import React from 'react';
import { Link, useMatch } from "react-router-dom";

import cn from "classnames";
import styles from "./default.module.scss";


export default function Navigation() {

  return (
    <nav className={styles['navigate']}>
      <span className={cn(styles['navigate__item'], {[styles['navigate__item--active']]: useMatch('/')})}>
        <Link className={styles['navigate__link']} to="/">Главная</Link>
      </span>
      <span className={cn(styles['navigate__item'], {[styles['navigate__item--active']]: useMatch('/services/*')})}>
        <Link className={styles['navigate__link']} to="/services">Услуги</Link>
      </span>
      <span className={cn(styles['navigate__item'], {[styles['navigate__item--active']]: useMatch('/partners')})}>
        <Link className={styles['navigate__link']} to="/partners">Партнеры</Link>
      </span>
      <span className={cn(styles['navigate__item'], {[styles['navigate__item--active']]: useMatch('/reviews')})}>
        <Link className={styles['navigate__link']} to="/reviews">Отзывы</Link>
      </span>
      <span className={cn(styles['navigate__item'], {[styles['navigate__item--active']]: useMatch('/contacts')})}>
        <Link className={styles['navigate__link']} to="/contacts">Контакты</Link>
      </span>
      <span className={cn(styles['navigate__item'], {[styles['navigate__item--active']]: useMatch('/about')})}>
        <Link className={styles['navigate__link']} to="/about">О нас</Link>
      </span>
    </nav>
  );
};
