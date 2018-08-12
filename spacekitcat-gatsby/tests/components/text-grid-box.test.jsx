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
    const textElement = sut.find('.item-label');

    expect(textElement.text()).toEqual('?');
  });

  describe('the text prop is provided', () => {
    beforeEach(() => {
      sut = shallow(<TextGridBox text="TOTES." />);
    });

    it('should render the ', () => {
      const textElement = sut.find('.item-label');

      expect(textElement.text()).toEqual('TOTES.');
    });
  });
});
