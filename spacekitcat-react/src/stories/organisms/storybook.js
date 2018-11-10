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
        <TopicPreview primaryExternalUrl='#nowehere' title='Bowser based fan fic' abstractText='Explore the epic world of Bowser' />)
    );
