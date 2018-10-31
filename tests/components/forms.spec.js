import React from 'react';
import { shallow } from 'enzyme';

// Component to be tested
import Form from '../../src/components/Forms/Form';

const click = jest.fn();
const handle = jest.fn();
const form = {
  email: {
    inputType: 'input',
    elementConfig: {
        type: 'text',
        placeholder: 'Your E-Mail or Username',
        required: true
    },
    value: '',
    validation: {
        required: true,
        isEmail: true
    },
    valid: false,
}};

describe('Form', () => {
  it('should render the sent form', () => {
    const wrapper = shallow(<Form form={form} btnName="test" btnClick={click} onChanged={handle}/>);

    expect(wrapper.exists()).toEqual(true);
  });
});
