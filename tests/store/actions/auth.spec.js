import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actions from 'Store/actions/auth';
import mockData from '../../__mocks__/actionMock';
 const middleware = [thunk];
const mockStore = configureStore(middleware);
const signupUrl = '/auth/signup';
const loginUrl='/auth/signin';
const initialState = {
  auth:{
    loading: false,
    token: null,
    auth: false
  }
};

const history = {
  push: jest.fn()
};

 describe('auth actions', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

   it('creates sign up user', (done) => {
     moxios.stubRequest(signupUrl, { status: 200, response: mockData.auth.data});

    const expectedActions = [
      { type: 'USER_AUTH_STARTED' },
      { type: 'USER_AUTH_SUCCESS', token: mockData.auth.data.data.token },
      { type: "MESSAGE_SET", message: mockData.auth.data.data.message }
    ];
    const store = mockStore(initialState);
    store.dispatch(actions.signupUser({username: "userData"}, history)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('creates login  user', (done) => {
    moxios.stubRequest(loginUrl, { status: 200, response: mockData.auth.data});

   const expectedActions = [
     { type: 'USER_AUTH_STARTED' },
     { type: 'USER_AUTH_SUCCESS', token: mockData.auth.data.data.token },
     { type: "MESSAGE_SET", message: mockData.auth.data.data.message }
   ];
   const store = mockStore(initialState);
   store.dispatch(actions.loginUser({username: "userData"}, history)).then(() => {
     // return of async actions
     expect(store.getActions()).toEqual(expectedActions);
     done();
   });
  });

  it('creates sign up user failed', (done) => {
    moxios.stubRequest(signupUrl, { status: 400, response: mockData.auth.error.response});

   const expectedActions = [
     { type: 'USER_AUTH_STARTED' },
     {"error": "Check your network or contact web admin", "type": "ERROR_SET"},
     {"type": "USER_AUTH_FAILED"}
   ];
   const store = mockStore(initialState);
   store.dispatch(actions.signupUser({username: "userData"}, history)).then(() => {
     // return of async actions
     expect(store.getActions()).toEqual(expectedActions);
     done();
   });
  });

  it('creates login user failed', (done) => {
    moxios.stubRequest(loginUrl, { status: 400, response: mockData.auth.error.response});

   const expectedActions = [
     { type: 'USER_AUTH_STARTED' },
     {"error": "Check your network or contact web admin", "type": "ERROR_SET"},
     {"type": "USER_AUTH_FAILED"}
   ];
   const store = mockStore(initialState);
   store.dispatch(actions.loginUser({username: "userData"}, history)).then(() => {
     // return of async actions
     expect(store.getActions()).toEqual(expectedActions);
     done();
   });
  });
});
