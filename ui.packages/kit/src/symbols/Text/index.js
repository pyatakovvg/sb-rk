
import React from 'react';
import types from 'prop-types';

import Body from "./Body";
import Default from "./Default";
import Comment from "./Comment";
import Paragraph from "./Paragraph";


function TextFactory({ type, children, ...props }) {
  switch(type) {
    case TextFactory.TYPE_BODY: return <Body {...props}>{ children }</Body>
    case TextFactory.TYPE_COMMENT: return <Comment {...props}>{ children }</Comment>
    case TextFactory.TYPE_PARAGRAPH: return <Paragraph {...props}>{ children }</Paragraph>
    default: return <Default {...props}>{ children }</Default>;
  }
}

TextFactory.TYPE_BODY = 'body';
TextFactory.TYPE_DEFAULT = 'default';
TextFactory.TYPE_COMMENT = 'comment';
TextFactory.TYPE_PARAGRAPH = 'paragraph';

TextFactory.propTypes = {
  className: types.string,
  type: types.oneOf([TextFactory.TYPE_DEFAULT, TextFactory.TYPE_BODY, TextFactory.TYPE_COMMENT, TextFactory.TYPE_PARAGRAPH]),
  children: types.any,
};

TextFactory.defaultProps = {
  className: null,
  type: TextFactory.TYPE_DEFAULT,
  children: null,
};

export default TextFactory;
