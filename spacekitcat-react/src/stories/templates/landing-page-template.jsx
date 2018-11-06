import React from 'react';
import SuperNavBar from '../organisms/super-nav-bar';
import Logo from '../molecules/logo';

import '../../App.css';

const LandingPageTemplate = props => (
    <div className="landingpage">
        <div className="App">
            <header className="App-header">
                <SuperNavBar />
                <Logo />
            </header>
        </div>
    </div>);

export default LandingPageTemplate;
