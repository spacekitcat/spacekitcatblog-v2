
import React, { propTypes } from 'react';
import PropTypes from 'prop-types';
import './_topic-preview.scss';

const TopicPreview = ({ githuburl, title, text }) => (
    <div className="topicpreview">
        <h1 className="topicpreview__title">
            <a href={githuburl}>{title}</a>
        </h1>
        <p className="topicpreview__text">
            {text}
        </p>
    </div>
);

TopicPreview.propTypes = {
    githuburl: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default TopicPreview;

