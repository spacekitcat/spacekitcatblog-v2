import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import LogoText from './logo-text';
import './_palette.scss';

const atoms = storiesOf('Atoms', module);

atoms.addDecorator(withKnobs);

atoms.add('Color palette', () => (
    <div className="colorpalette">
        <div className="colorpalette__swatch colorpalette__swatch--simply-red" />
        <div className="colorpalette__swatch colorpalette__swatch--green-sally-up" />
        <div className="colorpalette__swatch colorpalette__swatch--all-yellow" />
        <div className="colorpalette__swatch colorpalette__swatch--fade-to-grey" />
        <div className="colorpalette__swatch colorpalette__swatch--dancing-in-the-dark" />
    </div>
));

atoms.add('Logo text', () => (
    <LogoText before={boolean('Before style', false)} after={boolean('After style', false)} />
));
