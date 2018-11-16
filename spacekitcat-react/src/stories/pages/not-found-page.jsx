import React from 'react';
import LandingPageTemplate from '../templates/landing-page-template';

const NotFoundPage = props => (
  <LandingPageTemplate
    content={[
      {
        title:
          'Hello, my name is Mr. Burns. I believe you have a letter for me. ',
        primaryExternalUrl: 'https://www.youtube.com/watch?v=T3FUVDJtiSQ',
        abstractText: "Okay Mr. Burns, what's your first name? ...I don't know."
      }
    ]}
  />
);

export default NotFoundPage;
