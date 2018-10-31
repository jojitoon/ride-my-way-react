import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

// Component to be tested
import Profile from '../../src/containers/Profile/Profile';

const initialState ={
  user: {
    loading: false,
    user: {
      currentUser: "user",
      ridesGiven: [],
      ridesTaken: []
    },
  }
}


const middleware = [thunk];
const mockStore = configureStore(middleware);
let wrapper;
let store;
const getProfileAction = jest.fn();
describe('Profile', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Profile
            getProfileAction={getProfileAction}
          />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render the profile page correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
