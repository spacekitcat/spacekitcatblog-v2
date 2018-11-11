
import React, { propTypes } from 'react';
import PropTypes from 'prop-types';
import './_topic-preview.scss';

const getStyle = alt => alt ? 'topicpreview topicpreview--alt' : 'topicpreview';

const TopicPreview = ({ primaryExternalUrl, title, abstractText, altstyle }) => (
    <div className={getStyle(altstyle)}>
        <h1 className="topicpreview__title">
            <a href={primaryExternalUrl}>{title}</a>
        </h1>
        <p className="topicpreview__text">
            {abstractText}
        </p>
    </div>
);

TopicPreview.propTypes = {
    primaryExternalUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    abstractText: PropTypes.string,
    altstyle: PropTypes.bool
};

export default TopicPreview;

