import React from 'react';
import SuperNavBar from '../organisms/super-nav-bar';
import TopicPreview from '../organisms/topic-preview';
import PropTypes from 'prop-types';

import './_landing-page.scss';

const LandingPageTemplate = ( { content } ) => (
    <div className="landingpage">
        <SuperNavBar />
        {content &&
            <div className="landingpage__contentlist">
                {content.map((topic, index) =>
                <TopicPreview key={index} primaryExternalUrl={topic.primaryExternalUrl} title={topic.title} abstractText={topic.abstractText} />
                )}
            </div>
        }
    </div>);

LandingPageTemplate.propTypes = {
    content: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        primaryExternalUrl: PropTypes.string.isRequired,
        abstractText: PropTypes.string.isRequired
    }))
}

export default LandingPageTemplate;
