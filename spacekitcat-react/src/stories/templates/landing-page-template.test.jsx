import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import LandingPageTemplate from './landing-page-template';

Enzyme.configure({ adapter: new Adapter() });

describe('LandingPageTemplate component', () => {
    let component;
    let content;
    beforeEach(() => {
        component = shallow(<LandingPageTemplate content={content} />);
    });

    describe('when the content list is null', () => {
        beforeAll(() => {
            content = null;
        });

        it('should render the root element', () => {
            expect(component.find('.landingpage').exists()).toBe(true);
        });

        it('should not render the content list', () => {
            expect(component.find('.landingpage__contentlist').exists()).toBe(false);
        });
    });

    describe('when the content list has elements', () => {

        const contentItemOne = {
            title: 'item-one-title',
            primaryExternalUrl: 'item-one-external-url',
            abstractText: 'item-one-abstract-text'
        }

        const contentItemTwo = {
            title: 'item-two-title',
            primaryExternalUrl: 'item-two-external-url',
            abstractText: 'item-two-abstract-text'
        }

        beforeAll(() => {
            content = [
                contentItemOne,
                contentItemTwo
            ];
        });

        it('should render the root element', () => {
            expect(component.find('.landingpage').exists()).toBe(true);
        });

        it('should render the content list with the correct number of child elements', () => {
            expect(component.find('.landingpage__contentlist TopicPreview').length).toBe(2);
        });
        
        it('should render the first content item within the content list with the expected props', () => {
            const contentItem = component.find('.landingpage__contentlist TopicPreview').get(0);

            expect(contentItem.props).toMatchObject(contentItemOne);
            // expect(contentItemComponents.at(0).prop('title')).toBe(contentItemOneTitle);
            // expect(contentItemComponents.at(0).prop('primaryExternalUrl')).toBe(contentItemOneExternalLink1);
            // expect(contentItemComponents.at(0).prop('primaryExternalUrl')).toBe(contentItemOneExternalLink1);
            //expect(contentItemComponents.at(0).key()).toBe('0');
        });

        it('should render the first content item within the content list with the expected props', () => {
            const contentItemComponents = component.find('.landingpage__contentlist TopicPreview');

            // expect(contentItemComponents.at(1).prop('title')).toBe(contentItemTwoTitle);
            // expect(contentItemComponents.at(1).prop('primaryExternalUrl')).toBe(contentItemTwoExternalLink1);
            // expect(contentItemComponents.at(1).prop('primaryExternalUrl')).toBe(contentItemTwoExternalLink1);
            //expect(contentItemComponents.at(1).key()).toBe('1');
        });
    });
});
