import React from 'react';
import { shallow } from 'enzyme';

// Component to be tested
import JumboForm from '../../src/components/Home/JumboForm';


describe('JumboForm', () => {
  it('should render the jumbo form', () => {
    const wrapper = shallow(<JumboForm />);

    expect(wrapper.exists()).toEqual(true);
  });
});
