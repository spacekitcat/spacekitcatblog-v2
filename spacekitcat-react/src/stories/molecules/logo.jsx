
import React from 'react';
import LogoText from '../atoms/logo-text';
import './_logo-text.scss';

const Logo = props => (
    <div className="logo">
        <LogoText before />
        <LogoText />
        <LogoText after />
    </div>
);

export default Logo;

