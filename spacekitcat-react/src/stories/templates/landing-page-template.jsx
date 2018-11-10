import React from 'react';
import SuperNavBar from '../organisms/super-nav-bar';
import Logo from '../molecules/logo';
import TopicPreview from '../organisms/topic-preview';

import '../../App.css';

const LandingPageTemplate = props => (
    <div className="landingpage">
        <div className="App">
            <header className="App-header">
                <SuperNavBar />
                <TopicPreview githuburl="https://github.com/spacekitcat/libz77" title="LZ77 compression algorothm exploration" text="Welcome. No one's home! Now scram--and don't come back!" />
                <TopicPreview githuburl="https://github.com/spacekitcat/hackertextjs" title="Pure text Matrix esque animation experiments" text="I'm the biggest, baddest brute around, and don't you forget it." />
                <TopicPreview githuburl="https://github.com/spacekitcat/example-lambda-project" title="AWS Lambda exploration" text="BAH! Nobody apologizes on my behalf! I'll be back in 3 rounds with a fiendish surprise for the player with my card!" />
            </header>
        </div>
    </div>);

export default LandingPageTemplate;
