import React from 'react';
import './_super-nav-bar.scss';
import PlumberScarfFox from './discodavina.gif';

const SuperNavBar = props => (
  <div className="supernavbar">
    <div className="supernavbar__spritepen">
      <div className="supernavbar__sprite">
        <img
          src={PlumberScarfFox}
          alt="A small, 8-bit style sprite. Imagine the head of Nintendo's Mario with two giant legs instead of a torso."
        />
      </div>
    </div>
    <p className="supernavbar__text">SPACEKITCAT</p>
  </div>
);

export default SuperNavBar;
