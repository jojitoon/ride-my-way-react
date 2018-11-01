import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

// Component to be tested
import Home from '../../src/containers/Home/Home';

const initialState ={
  message: {
    error: "error",
    message: "message"
  },
  auth:{
    loading: false,
    token: "token",
    auth: false
  },
  rides:{
    loading: false,
    rides: [],
    singleRide: {},
    requests: [],
    myRequest: {}
  },
  user: {
    loading: false,
    user: {},
  },
  nav:{
    open: false
  }
}


const middleware = [thunk];
const mockStore = configureStore(middleware);
let wrapper;
let store;
describe('Home', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render the Home page correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
