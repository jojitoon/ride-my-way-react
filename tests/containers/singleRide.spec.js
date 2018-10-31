import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

// Component to be tested
import SingleRide from '../../src/containers/SingleRide';

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
describe('SingleRide', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <SingleRide match={{params: { rideId: 1 }}}/>
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render the single ride page correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
