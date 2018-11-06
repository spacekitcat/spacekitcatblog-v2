import React from 'react';
import { storiesOf } from '@storybook/react';
import LandingPage from './landing-page';

const molecules = storiesOf('Pages', module);

molecules.add('Landing page', () => (
    <LandingPage />
));
