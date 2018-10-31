import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

// Component to be tested
import Dashboard from '../../src/containers/Dashboard/Dashboard';

const initialState ={
}


const middleware = [thunk];
const mockStore = configureStore(middleware);
let wrapper;
let store;
describe('Dashboard', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Dashboard />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render the Dashboard page correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
