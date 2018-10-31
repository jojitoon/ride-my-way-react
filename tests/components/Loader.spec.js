
import React from 'react';
import { shallow } from 'enzyme';

// Component to be tested
import Loader from '../../src/components/Loader';


describe('Loader', () => {
  it('should render the Loader', () => {
    const wrapper = shallow(<Loader />);

    expect(wrapper.exists()).toEqual(true);
  });
});
