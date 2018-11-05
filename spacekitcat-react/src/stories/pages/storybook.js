import React from 'react';
import { storiesOf } from '@storybook/react';
import Logo from '../molecules/logo';

const molecules = storiesOf('Pages', module);

molecules.add('Landing page', () => (
    <Logo />
));
