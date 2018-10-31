import React from 'react';
import { shallow } from 'enzyme';

// Component to be tested
import Button from '../../src/components/Forms/Buttons/Buttons';


describe('Button', () => {
  it('should render the button', () => {
    const wrapper = shallow(<Button disabled={false}> Test</Button>);

    expect(wrapper.exists()).toEqual(true);
  });
});
