import React from 'react';
import { storiesOf } from '@storybook/react';
import Logo from '../molecules/logo';

const molecules = storiesOf('Templates', module);

molecules.add('misc', () => (
    <Logo />
));
