import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

// Component to be tested
import SignIn from '../../src/containers/SignIn/SignIn';

const initialState ={
  rides: {
    loading: false,
    rides: [],
    singleRide: null,
    requests: [],
    myRequest: {}
  }
}
const state = {signUpForm:{
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
const signupAction = jest.fn();
const setErrorAction = jest.fn();

let wrapper;
let store;
describe('SignIn', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <SignIn onBtnClick={onBtnClick}
            inputChangedHandler={inputChangedHandler}
            signupAction={signupAction}
            setErrorAction={setErrorAction}
          />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render the sign in page correctly', () => {
    wrapper.setState(state);
    expect(wrapper).toMatchSnapshot();
  });
});
