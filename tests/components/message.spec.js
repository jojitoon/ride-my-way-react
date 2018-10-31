import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

// Component to be tested
import Message from '../../src/components/Message';

const initialState ={
}

const middleware = [thunk];
const mockStore = configureStore(middleware);
let wrapper;
let store;
describe('Message', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(
      <Provider store={store}>
        <BrowserRouter>
          <Message />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render the message component correctly', () => {
    expect(wrapper.exists()).toEqual(true);
  });
});
