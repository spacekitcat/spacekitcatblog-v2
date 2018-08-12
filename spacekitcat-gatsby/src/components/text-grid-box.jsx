import React from 'react';
import PropTypes from 'prop-types';

const TextGridBox = ({ text }) => (
  <div className="questionbox">
    <div className="questionboxcontent">
      <p>{text}</p>
    </div>
  </div>
);

TextGridBox.defaultProps = {
  text: '?',
};

TextGridBox.propTypes = {
  text: PropTypes.string,
};

export default TextGridBox;
