import React from 'react';
import PropTypes from 'prop-types';

const TextGridBox = ({ text, url }) => (
  <div className="questionbox">
    <div className="questionboxcontent">
      <a className="questionboxlink" href={url}>{text}</a>
    </div>
  </div>
);

TextGridBox.defaultProps = {
  text: '?',
  url: '#spacestation',
};

TextGridBox.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
};

export default TextGridBox;
