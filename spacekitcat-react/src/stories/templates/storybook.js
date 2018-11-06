import React from 'react';
import { storiesOf } from '@storybook/react';
import LandingPageTemplate from './landing-page-template';

const molecules = storiesOf('Templates', module);

molecules.add('Landing page', () => (
    <LandingPageTemplate />
));
