import React from 'react';
import { shallow } from 'enzyme';

// Component to be tested
import Jumbo from '../../src/components/Home/Jumbo';


describe('Jumbo', () => {
  it('should render the button', () => {
    const wrapper = shallow(<Jumbo />);

    expect(wrapper.exists()).toEqual(true);
  });
});
