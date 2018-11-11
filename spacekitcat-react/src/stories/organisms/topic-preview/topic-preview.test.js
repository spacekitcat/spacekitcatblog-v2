import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import React from 'react';
import { shallow } from 'enzyme';
import TopicPreview from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('<TopicPreview />', () => {
    let primaryExternalUrl 
    let title; 
    let abstractText;
    let altstyle;
    beforeEach(() => {
        primaryExternalUrl = 'primaryExternalUrlValue';
        title = 'titleValue';
        abstractText = 'abstractTextValue';
        altstyle = false;
    });
    
    let component;
    beforeAll(() => {
        component = () => shallow(<TopicPreview primaryExternalUrl={primaryExternalUrl} title={title} abstractText={abstractText} altstyle={altstyle} />);
    });

    it('should render the root element without the `alt` modifier class', () => {
        expect(component().find('.topicpreview').hasClass('topicpreview--alt')).toBe(false);
    });

    it('should render TopicPreview with the expected title', () => {
        expect(component().find('.topicpreview .topicpreview__title').text()).toBe('titleValue');
    });

    it('should render TopicPreview with the expected anchor href', () => {
        expect(component().find('.topicpreview .topicpreview__title a').prop('href')).toBe(primaryExternalUrl);
    });

    it('should render TopicPreview with the expected abstract text', () => {
        expect(component().find('.topicpreview .topicpreview__text').text()).toBe(abstractText);
    });

    it('should render TopicPreview with the expected abstract text', () => {
        expect(component().find('.topicpreview .topicpreview__text').text()).toBe(abstractText);
    });

    describe('when the altstyle prop is provided', () => {
        beforeEach(() => {
            altstyle = true;
        });

        it('should render the root element with the `alt` modifier class', () => {
            expect(component().find('.topicpreview').hasClass('topicpreview--alt')).toBe(true);
        });
    })
});
