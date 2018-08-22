import React from 'react';
import PropTypes from 'prop-types';

class TextGridBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isFlipped: false };

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
    const { url } = this.props;
    return (
      <div className="questionbox">
        <div className="questionboxcontent">
          <a className="questionboxlink" href={url} onClick={this.flip}>{this.getDisplayValue()}</a>
        </div>
      </div>
    );
  }
}

TextGridBox.defaultProps = {
  text: '',
  url: '#spacestation',
};

TextGridBox.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
};

export default TextGridBox;
