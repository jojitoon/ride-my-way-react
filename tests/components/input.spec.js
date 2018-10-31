import React from 'react';
import { shallow } from 'enzyme';

// Component to be tested
import Input from '../../src/components/Forms/Input/Input';

const handle = jest.fn();

describe('input', () => {
  it('should render the input', () => {
    const wrapper = shallow(<Input inputType="input"
                                  elementConfig={{ require: true }}
                                  value=""
                                  changed={handle} />);

    expect(wrapper.exists()).toEqual(true);
  });

  it('should render the input', () => {
    const wrapper = shallow(<Input
                                  elementConfig={{ require: true }}
                                  value=""
                                  changed={handle} />);

    expect(wrapper.exists()).toEqual(true);
  });
});
