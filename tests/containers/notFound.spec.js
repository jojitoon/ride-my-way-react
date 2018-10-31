import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
// Component to be tested
import NotFound from '../../src/containers/NotFound/NotFound';

let wrapper;
describe('NotFound', () => {
  beforeEach(() => {
    wrapper = mount(
        <BrowserRouter>
          <NotFound />
        </BrowserRouter>
    );
  });
  it('should render the not found page correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
