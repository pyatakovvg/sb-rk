
import React from 'react';
import types from "prop-types";
import { Link } from 'react-router-dom';

import cn from 'classnames';
import './default.module.scss';


export default function A({ className, children, to, href, target, rel }) {
  const linkClassName = cn('a', className);
  return (
    to
      ? <Link className={linkClassName} to={to} rel={rel}>{ children }</Link>
      : <a className={linkClassName} href={href} rel={rel} target={target}>{ children }</a>
  );
}

A.propTypes = {
  className: types.string,
  children: types.node,
  to: types.string,
  href: types.string,
  target: types.oneOf(['_blank']),
  rel: types.string,
};

A.defaultProps = {
  className: null,
  children: null,
  to: null,
  href: null,
  target: '_blank',
  rel: 'noreferrer',
};
