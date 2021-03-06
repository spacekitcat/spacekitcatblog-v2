import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
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
        <div className="colorpalette__swatch colorpalette__swatch--blue-monday" />
        <div className="colorpalette__swatch colorpalette__swatch--white-wedding" />
    </div>
));

atoms.add('Typography', () => (
    <div className="typographypreview">
         <div className="typographypreview__view">
            <div className="typographypreview__label">
                five
            </div>
            <div className="typographypreview__font typographypreview__font--five">
                {text('Preview text', 'SPACEKITCAT')}
            </div>
        </div>
        <div className="typographypreview__view">
            <div className="typographypreview__label">
                eight
            </div>
            <div className="typographypreview__font typographypreview__font--eight">
                {text('Preview text', 'SPACEKITCAT')}
            </div>
        </div>
        <div className="typographypreview__view">
            <div className="typographypreview__label">
                ten
            </div>
            <div className="typographypreview__font typographypreview__font--ten">
                {text('Preview text', 'SPACEKITCAT')}
            </div>
        </div>
    </div>
));


atoms.add('Logo text', () => (
    <LogoText before={boolean('Before style', false)} after={boolean('After style', false)} />
));
