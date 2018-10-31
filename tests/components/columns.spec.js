import React from 'react';
import { shallow } from 'enzyme';

// Component to be tested
import Columns from '../../src/components/Home/Columns';


describe('Columns', () => {
  it('should render the button', () => {
    const wrapper = shallow(<Columns />);

    expect(wrapper.exists()).toEqual(true);
  });
});
