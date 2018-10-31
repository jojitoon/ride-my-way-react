import auth from '../../../src/store/reducers/auth';
import mockData from '../../__mocks__/mockData';

describe('auth reducer test', () => {
  it('should set initial state', () => {
    const state = auth(undefined, { type: '@@INIT' });
    expect(state).toEqual(mockData.auth);
  });

  it('should set loading to true', () => {
    const action = { type: 'USER_AUTH_STARTED' };
    const state = auth(undefined, action);
    expect(state).toEqual({ ...mockData.auth, loading: true });
  });

  it('should add token to state', () => {
    const action = {
      type: 'USER_AUTH_SUCCESS',
      token: "token",
    };
    const state = auth(undefined, action);
    expect(state).toEqual({
      ...mockData.auth,
      loading: false,
      token: "token",
      auth: true
    });
  });

  it('should set loading to false', () => {
    const action = {
      type: 'USER_AUTH_FAILED',
    };
    const state = auth(undefined, action);
    expect(state).toEqual({
      ...mockData.auth,
      loading: false,
    });
  });

});
