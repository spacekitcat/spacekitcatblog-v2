import React from 'react';
import LandingPageTemplate from '../templates/landing-page-template';

import '../../App.css';

const LandingPage = props => (
    <LandingPageTemplate content={
        [
            {
                title: 'LZ77 compression algorothm exploration',
                primaryExternalUrl: 'https://github.com/spacekitcat/libz77',
                abstractText: "Welcome. No one's home! Now scram--and don't come back!"
            },
            {
                title: 'Pure text Matrix esque animation experiments',
                primaryExternalUrl: 'https://github.com/spacekitcat/hackertextjs',
                abstractText: "I'm the biggest, baddest brute around, and don't you forget it."
            },
            {
                title: 'AWS Lambda exploration',
                primaryExternalUrl: 'https://github.com/spacekitcat/example-lambda-project',
                abstractText: "BAH! Nobody apologizes on my behalf! I'll be back in 3 rounds with a fiendish surprise for the player with my card!"
            },
        ]}
    />);

export default LandingPage;
