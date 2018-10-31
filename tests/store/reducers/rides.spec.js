import rides from '../../../src/store/reducers/rides';
import mockData from '../../__mocks__/mockData';

describe('rides reducer test', () => {
  it('should set initial state', () => {
    const state = rides(undefined, { type: '@@INIT' });
    expect(state).toEqual(mockData.rides);
  });

  it('should set loading to true', () => {
    const action = { type: 'GET_RIDES_STARTED' };
    const state = rides(undefined, action);
    expect(state).toEqual({ ...mockData.rides, loading: true });
  });

  it('should add rides to state', () => {
    const action = {
      type: 'GET_RIDES_SUCCESS',
      rides: mockData.rides.rides
    };
    const state = rides(undefined, action);
    expect(state).toEqual({
      ...mockData.rides,
      loading: false,
      rides: mockData.rides.rides
    });
  });

  it('should add a ride to state', () => {
    const action = {
      type: 'GET_RIDE_SUCCESS',
      ride: mockData.rides.singleRide
    };
    const state = rides(undefined, action);
    expect(state).toEqual({
      ...mockData.rides,
      loading: false,
      singleRide: mockData.rides.singleRide
    });
  });

  it('should add requests to state', () => {
    const action = {
      type: 'GET_REQUEST_SUCCESS',
      request: mockData.rides.requests
    };
    const state = rides(undefined, action);
    expect(state).toEqual({
      ...mockData.rides,
      loading: false,
      requests: mockData.rides.requests
    });
  });

  it('should add a request to state', () => {
    const action = {
      type: 'GET_MY_REQUEST_SUCCESS',
      request: mockData.rides.myRequest
    };
    const state = rides(undefined, action);
    expect(state).toEqual({
      ...mockData.rides,
      loading: false,
      myRequest: mockData.rides.myRequest
    });
  });

  it('should set loading to false', () => {
    const action = {
      type: 'CREATE_RIDE_SUCCESS',
    };
    const state = rides(undefined, action);
    expect(state).toEqual({
      ...mockData.rides,
      loading: false,
    });
  });


  it('should set loading to false', () => {
    const action = {
      type: 'GET_RIDES_FAILED',
    };
    const state = rides(undefined, action);
    expect(state).toEqual({
      ...mockData.rides,
      loading: false,
    });
  });

});
