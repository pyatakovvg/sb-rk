
import types from 'prop-types';
import React from 'react';

import CustomTitle from "./CustomTitle";
import SelectTitle from "./SelectTitle";


export default function BreadcrumbTitle({ children, className, title }) {
  return children
    ? <SelectTitle className={className} title={title}>{ children }</SelectTitle>
    : <CustomTitle className={className} title={title} />;
}

BreadcrumbTitle.propTypes = {
  className: types.string,
  title: types.string,
  children: types.any,
};

BreadcrumbTitle.defaultProps = {
  className: '',
  title: '',
  children: null,
};
