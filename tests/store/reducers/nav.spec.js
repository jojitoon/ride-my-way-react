import nav from '../../../src/store/reducers/navs';
import mockData from '../../__mocks__/mockData';

describe('nav reducer test', () => {
  it('should set initial state', () => {
    const state = nav(undefined, { type: '@@INIT' });
    expect(state).toEqual(mockData.nav);
  });

  it('should set nav open to true', () => {
    const action = { type: 'CHANGE_NAV' };
    const state = nav(undefined, action);
    expect(state).toEqual({ ...mockData.nav, open: true });
  });

});
