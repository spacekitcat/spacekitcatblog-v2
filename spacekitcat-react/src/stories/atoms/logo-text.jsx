
import React from 'react';
import './_logo-text.scss';

const componentClasses = ({ before, after }) => {
    let componentClasses = 'logotext';
    componentClasses = componentClasses += before ? ' logotext--before' : '';
    componentClasses = componentClasses += after ? ' logotext--after' : '';

    return componentClasses;
}

const LogoText = ({ before, after }) => {
    return (
        <h1 className={componentClasses({ before, after })}>
            <span className="logotext__first-word">SPACE</span>
            <span className="logotext__second-word">KIT</span>
            <span className="logotext__third-word">CAT</span>
        </h1>
    );
}

export default LogoText;

