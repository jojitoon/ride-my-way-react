import React from 'react';
import { shallow } from 'enzyme';

// Component to be tested
import Foot from '../../src/components/Forms/Footer';


describe('Form footer', () => {
  it('should render the footer link', () => {
    const wrapper = shallow(<Foot type="signin" />);

    expect(wrapper.exists()).toEqual(true);
  });
  it('should render the footer link', () => {
    const wrapper = shallow(<Foot type="signup" />);

    expect(wrapper.exists()).toEqual(true);
  });

  it('should render the footer link', () => {
    const wrapper = shallow(<Foot />);

    expect(wrapper.exists()).toEqual(true);
  });
});
