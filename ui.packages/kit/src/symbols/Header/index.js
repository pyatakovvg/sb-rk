
import React from 'react';
import types from 'prop-types';

import Header1 from "./Header1";
import Header2 from "./Header2";
import Header3 from "./Header3";
import Header4 from "./Header4";
import Header5 from "./Header5";


function HeaderFactory({ level, children, ...props }) {
  switch(level) {
    case 2: return <Header2 {...props}>{ children }</Header2>
    case 3: return <Header3 {...props}>{ children }</Header3>
    case 4: return <Header4 {...props}>{ children }</Header4>
    case 5: return <Header5 {...props}>{ children }</Header5>
    default: return <Header1 {...props}>{ children }</Header1>;
  }
}

HeaderFactory.propTypes = {
  className: types.string,
  level: types.oneOf([1, 2, 3, 4, 5]),
  children: types.any,
};

HeaderFactory.defaultProps = {
  className: null,
  level: 1,
  children: null,
};

export default HeaderFactory;
