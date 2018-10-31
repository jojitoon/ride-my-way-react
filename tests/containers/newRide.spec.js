import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

// Component to be tested
import NewRide from '../../src/containers/NewRide';

const initialState ={
  rides: {
    loading: false,
    rides: [],
    singleRide: null,
    requests: [],
    myRequest: {}
  }
}
const state = {rideForm:{
  name: {
      inputType: 'input',
      elementConfig:{
          type: 'text',
          placeholder: 'Your Username',
          minLength: "3",
          required: true,
      },
      value: '',
      validation: {
          required: true
      },
      valid: false,
      touched: false,
  },
}}

const onBtnClick = jest.fn();
const inputChangedHandler = jest.fn();
const middleware = [thunk];
const mockStore = configureStore(middleware);
const createRideAction = jest.fn();
const setErrorAction = jest.fn();

let wrapper;
let store;
describe('NewRide', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <NewRide onBtnClick={onBtnClick}
            inputChangedHandler={inputChangedHandler}
            createRideAction={createRideAction}
            setErrorAction={setErrorAction}
          />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render the new ride page correctly', () => {
    wrapper.setState(state);
    expect(wrapper).toMatchSnapshot();
  });
});
