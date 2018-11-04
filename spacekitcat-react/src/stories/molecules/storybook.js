import React from 'react';
import { storiesOf } from '@storybook/react';
import Logo from './logo';

const molecules = storiesOf('Molecules', module);

molecules.add('Logo', () => (
    <Logo />
));
