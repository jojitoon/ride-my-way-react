import React from 'react';
import { shallow } from 'enzyme';

// Component to be tested
import Column from '../../src/components/Home/Column';


describe('Column', () => {
  it('should render the button', () => {
    const wrapper = shallow(<Column img={{icon: "image"}} title="title"/>);

    expect(wrapper.exists()).toEqual(true);
  });
});
