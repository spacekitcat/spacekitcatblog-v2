import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ siteTitle }) => (
  <div className="gel-layout__item header" id="header">
    <h1 className="sitename">
      {siteTitle}
    </h1>
  </div>
);

Header.defaultProps = {
};

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default Header;
