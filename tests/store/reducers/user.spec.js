import user from '../../../src/store/reducers/user';
import mockData from '../../__mocks__/mockData';

describe('user reducer test', () => {
  it('should set initial state', () => {
    const state = user(undefined, { type: '@@INIT' });
    expect(state).toEqual(mockData.user);
  });

  it('should set loading to true', () => {
    const action = { type: 'USER_STARTED' };
    const state = user(undefined, action);
    expect(state).toEqual({ ...mockData.user, loading: true });
  });

  it('should add token to state', () => {
    const action = {
      type: 'USER_SUCCESS',
      user: mockData.user.user,
    };
    const state = user(undefined, action);
    expect(state).toEqual({
      ...mockData.user,
      loading: false,
      user: mockData.user.user,
    });
  });

  it('should set loading to false', () => {
    const action = {
      type: 'USER_FAILED',
    };
    const state = user(undefined, action);
    expect(state).toEqual({
      ...mockData.user,
      loading: false,
    });
  });

});
