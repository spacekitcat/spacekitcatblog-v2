import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import LogoText from './logo-text';

const atoms = storiesOf('Atoms', module);

atoms.addDecorator(withKnobs);

atoms.add('Logo text', () => (
    <LogoText before={boolean('Before style', false)} after={boolean('After style', false)} />
));
