import React from 'react';
import LandingPageTemplate from '../templates/landing-page-template';

const SpaceThoughtsPage = props => (
  <LandingPageTemplate
    content={[
      {
        title: 'Gender Abstractionism',
        primaryExternalUrl: 'http://spacekitcat.com',
        abstractText:
          "A view of gender that I'll clumsily represent with the help of a similie comparing it to the abstraction process in the software design process."
      }
    ]}
  />
);

export default SpaceThoughtsPage;
