
import React from 'react';
import './_logo.scss';

const Logo = props => (
    <div className="logo">
        <h1 className="logo__text--before">
            <span className="logo__text-first-word">SPACE</span>KITCAT
        </h1>

        <h1 className="logo__text">
            SPACE<span className="logo__text-first-word">KIT</span>CAT
        </h1>

        <h1 className="logo__text--after">
            SPACEKIT<span className="logo__text-first-word">CAT</span>
        </h1>
    </div>
);

export default Logo;

