import React from 'react';
import { storiesOf } from '@storybook/react';
import SuperNavBar from './super-nav-bar/index';
import TopicPreview from './topic-preview';

const molecules = storiesOf('Organisms', module);

molecules
    .add('SuperNavBar', () => (
        <SuperNavBar />)
    )
    .add('TopicPreview', () => (
        <TopicPreview />)
    );
