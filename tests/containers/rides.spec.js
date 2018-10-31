import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

// Component to be tested
import Rides from '../../src/containers/Rides/Rides';

const initialState ={
  rides: {
    loading: false,
    rides: [],
    singleRide: null,
    requests: [],
    myRequest: {}
  }
}


const middleware = [thunk];
const mockStore = configureStore(middleware);
let wrapper;
let store;
describe('Rides', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Rides
          />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render the rides page correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
