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
    beforeEach(() => {
      sut = shallow(<TextGridBox text="TOTES." />);
    });

    it('should render the provided text', () => {
      const textElement = sut.find('.questionboxlink');

      expect(textElement.text()).toEqual('TOTES.');
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

    it('should render the exepcted text', () => {
      const textElement = sut.find('.questionboxlink');

      expect(textElement.text()).toEqual('?');
    });

    it('should render the provided url as href', () => {
      const textElement = sut.find('.questionboxlink');

      expect(textElement.prop('href')).toEqual(expectedHref);
    });
  });
});
