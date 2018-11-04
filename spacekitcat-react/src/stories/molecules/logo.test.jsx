import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import React from 'react';
import { shallow } from 'enzyme';
import Logo from './logo';

Enzyme.configure({ adapter: new Adapter() });

describe('<Logo />', () => {
    const component = () => shallow(<Logo />);

    it('renders the root element', () => {
        expect(component().find('.logo').length).toBe(1);
    });

    it('renders three LogoText elements', () => {
        expect(component().find('.logo LogoText').length).toBe(3);
    })

    it('renders the first LogoText element with the expected props', () => {
        expect(component().find('.logo LogoText').at(0).props().before).toBe(true);
        expect(component().find('.logo LogoText').at(0).props().after).toBe(undefined);
    });

    it('renders the second LogoText element with the expected props', () => {
        expect(component().find('.logo LogoText').at(1).props().before).toBe(undefined);
        expect(component().find('.logo LogoText').at(1).props().after).toBe(undefined);
    });

    it('renders the third LogoText element with the expected props', () => {
        expect(component().find('.logo LogoText').at(2).props().before).toBe(undefined);
        expect(component().find('.logo LogoText').at(2).props().after).toBe(true);
    });
});
