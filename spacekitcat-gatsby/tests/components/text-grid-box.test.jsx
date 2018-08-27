import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import TextGridBox from '../../src/components/text-grid-box';

configure({ adapter: new Adapter() });

describe('TextGridBox', () => {
  let sut;
  beforeEach(() => {
    sut = shallow(<TextGridBox />);
  });

  it('should render the default text', () => {
    const textElement = sut.find('.questionboxlink');

    expect(textElement.text()).toEqual('?');
  });

  describe('the text prop is provided', () => {
    const expectedClassName = 'className';
    beforeEach(() => {
      sut = shallow(<TextGridBox className={expectedClassName} text="LIES." />);
    });

    it('should set the className prop', () => {
      expect(sut.props().className).toEqual('className');
    });

    it('should render the placeholder text', () => {
      const textElement = sut.find('.questionboxlink');

      expect(textElement.text()).toEqual('?');
    });

    describe('and the revealedByDefault prop is provided', () => {
      beforeEach(() => {
        sut = shallow(<TextGridBox text="LIES." revealedByDefault />);
      });

      it('should render the placeholder text', () => {
        const textElement = sut.find('.questionboxlink');

        expect(textElement.text()).toEqual('LIES.');
      });
    });

    it('should render the provided url as href', () => {
      const textElement = sut.find('.questionboxlink');

      expect(textElement.prop('href')).toEqual('#spacestation');
    });
  });

  describe('the url prop is provided', () => {
    const expectedHref = 'http://a-test-url.com';
    beforeEach(() => {
      sut = shallow(<TextGridBox url={expectedHref} />);
    });

    it('should render the placeholder text', () => {
      const textElement = sut.find('.questionboxlink');

      expect(textElement.text()).toEqual('?');
    });

    it('should render the provided url as href', () => {
      const textElement = sut.find('.questionboxlink');

      expect(textElement.prop('href')).toEqual(expectedHref);
    });

    describe('the externalref prop is true', () => {
      const expectedText = 'LIES.';
      beforeEach(() => {
        sut = shallow(<TextGridBox text={expectedText} url={expectedHref} externalref />);
      });

      it('should render the placeholder text', () => {
        const textElement = sut.find('GatsbyLink');

        expect(textElement.prop('children')).toEqual('?');
      });

      describe('and the button is clicked', () => {
        beforeEach(() => {
          const textElement = sut.find('.questionboxlink');
          textElement.simulate('click');
        });

        it('should render the provided text', () => {
          const textElement = sut.find('.questionboxlink');

          expect(textElement.text()).toEqual('LIES.');
        });
      });

      it('should render the provided url as href', () => {
        const textElement = sut.find('GatsbyLink');

        expect(textElement.prop('to')).toEqual(expectedHref);
      });
    });
  });
});
