import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import React from 'react';
import { shallow } from 'enzyme';
import LogoText from './logo-text';

Enzyme.configure({ adapter: new Adapter() });

describe('<LogoText />', () => {
    const component = () => shallow(<LogoText />);

    it('renders the h1 component with the base class', () => {
        expect(component().find('h1').hasClass('logotext')).toBe(true);
    });

    it('renders the h1 component without the before class', () => {
        expect(component().find('h1').hasClass('logotext--before')).toBe(false);
    });

    it('renders the h1 component without the after class', () => {
        expect(component().find('h1').hasClass('logotext--after')).toBe(false);
    });

    it('renders the first word with the correct text', () => {
        expect(component().find('h1 .logotext__first-word').text()).toBe('SPACE');
    });

    it('renders the second word with the correct text', () => {
        expect(component().find('h1 .logotext__second-word').text()).toBe('KIT');
    });

    it('renders the third word with the correct text', () => {
        expect(component().find('h1 .logotext__third-word').text()).toBe('CAT');
    });
});

describe('<LogoText before />', () => {
    const component = () => shallow(<LogoText before />);

    it('renders the h1 component with the before class', () => {
        expect(component().find('h1').hasClass('logotext logotext--before')).toBe(true);
    });

    it('renders the h1 component without the after class', () => {
        expect(component().find('h1').hasClass('logotext--after')).toBe(false);
    });
});

describe('<LogoText after />', () => {
    const component = () => shallow(<LogoText after />);

    it('renders the h1 component without the before class', () => {
        expect(component().find('h1').hasClass('logotext--before')).toBe(false);
    });

    it('renders the h1 component with the after class', () => {
        expect(component().find('h1').hasClass('logotext logotext--after')).toBe(true);
    });
});

describe('<LogoText before after />', () => {
    const component = () => shallow(<LogoText before after />);

    it('renders the h1 component with the correct class', () => {
        expect(component().find('h1').hasClass('logotext logotext--before logotext--after')).toBe(true);
    });

});
