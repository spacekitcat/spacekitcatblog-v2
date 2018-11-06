import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import React from 'react';
import { shallow } from 'enzyme';
import SuperNavBar from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('<SupernNvBar />', () => {
    const component = () => shallow(<SuperNavBar />);

    it('renders the root element', () => {
        expect(component().find('.supernavbar').length).toBe(1);
    });

});
