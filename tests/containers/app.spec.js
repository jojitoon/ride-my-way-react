import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

// Component to be tested
import App from '../../src/App';

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
describe('Dashboard', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render the App correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
