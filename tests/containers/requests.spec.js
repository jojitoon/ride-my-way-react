import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

// Component to be tested
import Requests from '../../src/containers/Requests';

const initialState ={
  rides: {
    loading: false,
    rides: [],
    singleRide: null,
    requests: {
      requestSent:[{
        id: 1,
        ride_name: 'name',
        rider:'rider',
        status: 'status',
        ride_id: '2'
      }],
      requestRecieve: [{
        id: 1,
        ride_name: 'name',
        rider:'rider',
        status: 'status',
        ride_id: '2'
      }]
    },
    myRequest: {}
  }
}


const middleware = [thunk];
const mockStore = configureStore(middleware);
let wrapper;
let store;
describe('Requests', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Requests
          />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render the rides page correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
