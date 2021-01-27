
import React from 'react';
import types from 'prop-types';

import Body from "./Body";
import Default from "./Default";
import Comment from "./Comment";


function TextFactory({ type, children, ...props }) {
  switch(type) {
    case TextFactory.TYPE_BODY: return <Body {...props}>{ children }</Body>
    case TextFactory.TYPE_COMMENT: return <Comment {...props}>{ children }</Comment>
    default: return <Default {...props}>{ children }</Default>;
  }
}

TextFactory.TYPE_BODY = 'body';
TextFactory.TYPE_DEFAULT = 'default';
TextFactory.TYPE_COMMENT = 'comment';

TextFactory.propTypes = {
  className: types.string,
  type: types.oneOf([TextFactory.TYPE_DEFAULT, TextFactory.TYPE_BODY, TextFactory.TYPE_COMMENT]),
  children: types.any,
};

TextFactory.defaultProps = {
  className: null,
  type: TextFactory.TYPE_DEFAULT,
  children: null,
};

export default TextFactory;
