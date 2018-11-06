import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import React from 'react';
import { shallow } from 'enzyme';
import TopicPreview from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('<TopicPreview />', () => {
    const component = () => shallow(<TopicPreview />);

    it('renders the root element', () => {
        expect(component().find('.topicpreview').length).toBe(1);
    });

});
