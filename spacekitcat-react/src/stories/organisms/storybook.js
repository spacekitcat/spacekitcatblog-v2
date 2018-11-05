import React from 'react';
import { storiesOf } from '@storybook/react';
import SuperNavBar from './super-nav-bar';

const molecules = storiesOf('Organisms', module);

molecules.add('SuperNavBar', () => (
    <SuperNavBar />
));
