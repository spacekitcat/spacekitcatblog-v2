import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import React from 'react';
import { shallow } from 'enzyme';
import Storybook from './storybook';
import LandingPage from './landing-page';

Enzyme.configure({ adapter: new Adapter() });

describe('<Storybook />', () => {
    const component = () => shallow(<Storybook />);

    it('renders the root element', () => {
        expect(component().find(LandingPage).length).toBe(1);
    });

});
