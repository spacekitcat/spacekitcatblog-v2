import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { themes } from '@storybook/components';
import Logo from './atoms/logo';

storiesOf('Button', module)
    .add('with text', () => (
        <Button onClick={action('clicked')}>Hello Button</Button>
    ))
    .add('with some emoji', () => (
        <Button onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
    ));

storiesOf('Atoms', module)
    .add('Logo', () => (
        <Logo />
    ));
