import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actions from 'Store/actions/message';
import mockData from '../../__mocks__/actionMock';
 const middleware = [thunk];
const mockStore = configureStore(middleware);
const signupUrl = '/auth/signup';
const loginUrl = '/auth/signin';

const initialState = {
  message: {
    error: null,
    message: null
  },
};


 describe('message actions', () => {

   it('set a message', (done) => {
      const expectedActions = [
      { type: 'MESSAGE_SET', message: "message" },
      ];
    const store = mockStore(initialState);
    store.dispatch(actions.setMessage("message"));
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
      done();
  });

  it('set an error', (done) => {
     const expectedActions = [
     { type: 'ERROR_SET', error: "error" },
     ];
   const store = mockStore(initialState);
   store.dispatch(actions.setError("error"));
     // return of async actions
     expect(store.getActions()).toEqual(expectedActions);
     done();
  });

  it('clear all', (done) => {
     const expectedActions = [
     { type: 'MESSAGE_CLEAR_ALL'},
     ];
   const store = mockStore(initialState);
   store.dispatch(actions.clearMessages());
     // return of async actions
     expect(store.getActions()).toEqual(expectedActions);
     done();
  });
});
