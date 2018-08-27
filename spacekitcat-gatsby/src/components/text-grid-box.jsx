import React from 'react';
import PropTypes from 'prop-types';
import GatsbyLink from 'gatsby-link';

class TextGridBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isFlipped: props.revealedByDefault };

    this.flip = this.flip.bind(this);
  }

  getDisplayValue() {
    const { isFlipped } = this.state;
    const { text } = this.props;

    if (isFlipped) {
      return text;
    }
    return '?';
  }

  flip() {
    this.setState(prevState => ({
      isFlipped: !prevState.isFlipped,
    }));
  }

  render() {
    const { url, externalref } = this.props;
    return (
      <div className="questionbox">
        <div className="questionboxcontent">
          <a className="questionboxlink" href={url} onClick={this.flip}>{this.getDisplayValue()}</a>
          { externalref
          && <GatsbyLink to={url}>{this.getDisplayValue()}</GatsbyLink> }
        </div>
      </div>
    );
  }
}

TextGridBox.defaultProps = {
  text: '',
  url: '#spacestation',
  externalref: false,
  revealedByDefault: false,
};

TextGridBox.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  externalref: PropTypes.bool,
  revealedByDefault: PropTypes.bool,
};

export default TextGridBox;
