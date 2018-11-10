import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import React from 'react';
import { shallow } from 'enzyme';
import TopicPreview from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('<TopicPreview />', () => {
    const primaryExternalUrl = 'primaryExternalUrlValue';
    const title = 'titleValue';
    const abstractText = 'abstractTextValue';

    const component = () => shallow(<TopicPreview primaryExternalUrl={primaryExternalUrl} title={title} abstractText={abstractText} />);

    it('should render TopicPreview with the expected title', () => {
        expect(component().find('.topicpreview .topicpreview__title').text()).toBe('titleValue');
    });

    it('should render TopicPreview with the expected anchor href', () => {
        expect(component().find('.topicpreview .topicpreview__title a').prop('href')).toBe(primaryExternalUrl);
    });

    it('should render TopicPreview with the expected abstract', () => {
        expect(component().find('.topicpreview .topicpreview__text').text()).toBe(abstractText);
    });
});
