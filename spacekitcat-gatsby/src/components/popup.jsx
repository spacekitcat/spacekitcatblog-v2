import React from 'react';
import PropTypes from 'prop-types';

class PopUp extends React.Component {
  constructor(props) {
    super(props);

    const { visible } = props;
    this.state = { visible };
  }

  render() {
    const { visible } = this.state;
    let popupClass = 'popup__container ';
    popupClass += visible ? 'popup__container--show' : 'popup__container--hide';

    return (
      <div className={popupClass}>
        <button
          type="button"
          onBlur={this.closeHandler}
          className="popup__button"
          ref={(button) => {
            this.closeButton = button;
          }}
        />
        <p className="popup__text">Hewo, pweas sine inn.</p>

      </div>);
  }
}

PropTypes.PropTypes = {
  visible: PropTypes.bool.isRequired,
};

export default PopUp;
