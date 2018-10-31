import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actions from 'Store/actions/user';
import mockData from '../../__mocks__/actionMock';
 const middleware = [thunk];
const mockStore = configureStore(middleware);
const Url = '/auth/profile';

const initialState = {
  user: {
    loading: false,
    user: null,
  }
};

 describe('user actions', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

   it('creates sign up user', (done) => {
     moxios.stubRequest(Url, { status: 200, response: mockData.user.data});

    const expectedActions = [
      { type: 'USER_STARTED' },
      { type: 'USER_SUCCESS', user: mockData.user.data.data }
    ];
    const store = mockStore(initialState);
    store.dispatch(actions.getProfile()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('creates sign up user', (done) => {
  moxios.stubRequest(Url, { status: 400, response: mockData.user.error.response});

   const expectedActions = [
     { type: 'USER_STARTED' },
       {"error": "Check your network or contact web admin", "type": "ERROR_SET"},
       {"type": "USER_FAILED"}
     ];
   const store = mockStore(initialState);
   store.dispatch(actions.getProfile()).then(() => {
     // return of async actions
     expect(store.getActions()).toEqual(expectedActions);
     done();
   });
  });
});
