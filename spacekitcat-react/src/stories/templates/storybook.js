import React from 'react';
import { storiesOf } from '@storybook/react';
import LandingPageTemplate from './landing-page-template';

const molecules = storiesOf('Templates', module);

molecules.add('Landing page', () => (
    <LandingPageTemplate content={[
        {title: 'Common People', primaryExternalUrl: '#pulp', abstractText: 'She came from Greece, she had a thirst for knowledge.'},
        {title: 'Hey', primaryExternalUrl: '#pixies', abstractText: 'Hey. Been trying to meet you. Hey. Must be a devil between us.'}
    ]}/>
));
