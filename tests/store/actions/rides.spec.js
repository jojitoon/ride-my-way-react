import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actions from 'Store/actions/rides';
import mockData from '../../__mocks__/actionMock';
 const middleware = [thunk];
const mockStore = configureStore(middleware);

const rideId=1;
const ridesUrl = '/rides';
const reqUrl = '/requests';
const myreqUrl = `/rides/${rideId}/requests`;
const joinUrl = `/rides/${rideId}/requests`;
const rideUrl=`/rides/${rideId}`;
const createRideUrl = '/users/rides';
const decideUrl = `rides/${rideId}/requests/${rideId}`;

const initialState = {
  rides:{
    loading: false,
    rides: [],
    singleRide: null,
    requests: [],
    myRequest: {}
  }
};

const history = {
  push: jest.fn()
};

 describe('rides actions', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

   it('get all rides', (done) => {
     moxios.stubRequest(ridesUrl, { status: 200, response: mockData.rides.data});

    const expectedActions = [
      { type: 'GET_RIDES_STARTED' },
      { type: 'GET_RIDES_SUCCESS', rides: mockData.rides.data.data.rides },
      ];
    const store = mockStore(initialState);
    store.dispatch(actions.getAllRides()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });



  it('get all rides failed', (done) => {
    moxios.stubRequest(ridesUrl, { status: 400, response: mockData.rides.error.response});

 const expectedActions = [
     { type: 'GET_RIDES_STARTED' },
     {"error": "Check your network or contact web admin", "type": "ERROR_SET"},
     {"type": "GET_RIDES_FAILED"}
   ];
   const store = mockStore(initialState);
   store.dispatch(actions.getAllRides()).then(() => {
     // return of async actions
     expect(store.getActions()).toEqual(expectedActions);
     done();
   });
  });

  it('get a ride', (done) => {
    moxios.stubRequest(rideUrl, { status: 200, response: mockData.rides.data});

   const expectedActions = [
     { type: 'GET_RIDES_STARTED' },
     { type: 'GET_RIDE_SUCCESS', ride: mockData.rides.data.data.ride },
     ];
   const store = mockStore(initialState);
   store.dispatch(actions.getRide(rideId)).then(() => {
     // return of async actions
     expect(store.getActions()).toEqual(expectedActions);
     done();
   });
 });



 it('get a ride failed', (done) => {
   moxios.stubRequest(rideUrl, { status: 400, response: mockData.rides.error.response});

const expectedActions = [
    { type: 'GET_RIDES_STARTED' },
    {"error": "Check your network or contact web admin", "type": "ERROR_SET"},
    {"type": "GET_RIDES_FAILED"}
  ];
  const store = mockStore(initialState);
  store.dispatch(actions.getRide(rideId)).then(() => {
    // return of async actions
    expect(store.getActions()).toEqual(expectedActions);
    done();
  });
 });

 it('create a ride', (done) => {
   moxios.stubRequest(createRideUrl, { status: 200, response: mockData.rides.data});

  const expectedActions = [
    { type: 'GET_RIDES_STARTED' },
    { type: 'CREATE_RIDE_SUCCESS'},
    { type: "MESSAGE_SET", message: "Ride was created successfully!" }
    ];
  const store = mockStore(initialState);
  store.dispatch(actions.createRide({ ride: "data" }, history)).then(() => {
    // return of async actions
    expect(store.getActions()).toEqual(expectedActions);
    done();
  });
});



it('create a ride failed', (done) => {
  moxios.stubRequest(createRideUrl, { status: 400, response: mockData.rides.error.response});

const expectedActions = [
   { type: 'GET_RIDES_STARTED' },
   {"error": "Check your network or contact web admin", "type": "ERROR_SET"},
   {"type": "GET_RIDES_FAILED"}
 ];
 const store = mockStore(initialState);
 store.dispatch(actions.createRide(rideId, history)).then(() => {
   // return of async actions
   expect(store.getActions()).toEqual(expectedActions);
   done();
 });
});

it('get all request', (done) => {
  moxios.stubRequest(reqUrl, { status: 200, response: mockData.rides.data});

 const expectedActions = [
   { type: 'GET_RIDES_STARTED' },
   { type: 'GET_REQUEST_SUCCESS', request:  mockData.rides.data.data},
   ];
 const store = mockStore(initialState);
 store.dispatch(actions.getRequest()).then(() => {
   // return of async actions
   expect(store.getActions()).toEqual(expectedActions);
   done();
 });
});



it('get all request failed', (done) => {
 moxios.stubRequest(reqUrl, { status: 400, response: mockData.rides.error.response});

const expectedActions = [
  { type: 'GET_RIDES_STARTED' },
  {"error": "Check your network or contact web admin", "type": "ERROR_SET"},
  {"type": "GET_RIDES_FAILED"}
];
const store = mockStore(initialState);
store.dispatch(actions.getRequest()).then(() => {
  // return of async actions
  expect(store.getActions()).toEqual(expectedActions);
  done();
});
});

it('get a request', (done) => {
  moxios.stubRequest(myreqUrl, { status: 200, response: mockData.rides.data});

 const expectedActions = [
   { type: 'GET_RIDES_STARTED' },
   { type: 'GET_MY_REQUEST_SUCCESS', request:  mockData.rides.data.data.request},
   ];
 const store = mockStore(initialState);
 store.dispatch(actions.getYourRequest(rideId)).then(() => {
   // return of async actions
   expect(store.getActions()).toEqual(expectedActions);
   done();
 });
});

it('get a request failed', (done) => {
 moxios.stubRequest(myreqUrl, { status: 400, response: mockData.rides.error.response});

const expectedActions = [
  { type: 'GET_RIDES_STARTED' },
  {"error": "Check your network or contact web admin", "type": "ERROR_SET"},
  {"type": "GET_RIDES_FAILED"}
];
const store = mockStore(initialState);
store.dispatch(actions.getYourRequest(rideId)).then(() => {
  // return of async actions
  expect(store.getActions()).toEqual(expectedActions);
  done();
});
});


// it('join a ride', (done) => {
//   moxios.stubRequest(myreqUrl, { status: 200 });
//
//  const expectedActions = [
//    { type: 'GET_RIDES_STARTED' },
//    { type: 'CREATE_RIDE_SUCCESS'},
//    { type: "MESSAGE_SET", message: "Your request has been sent successfully." }
//    ];
//  const store = mockStore(initialState);
//  store.dispatch(actions.joinRide(rideId)).then(() => {
//    // return of async actions
//    expect(store.getActions()).toEqual(expectedActions);
//    done();
//  });
// });

// it('join a ride failed', (done) => {
//  moxios.stubRequest(joinUrl, { status: 400, response: mockData.rides.error.response});
//
// const expectedActions = [
//   { type: 'GET_RIDES_STARTED' },
//   {"error": "Check your network or contact web admin", "type": "ERROR_SET"},
//   {"type": "GET_RIDES_FAILED"}
// ];
// const store = mockStore(initialState);
// store.dispatch(actions.joinRide(rideId)).then(() => {
//   // return of async actions
//   expect(store.getActions()).toEqual(expectedActions);
//   done();
// });
// });


it('decide a request', (done) => {
  moxios.stubRequest(decideUrl, { status: 200, response: mockData.rides.data});

 const expectedActions = [
   { type: 'GET_RIDES_STARTED' },
   { type: 'GET_RIDES_STARTED' },
   { type: "MESSAGE_SET", message: mockData.rides.data.data.message },
   ];
 const store = mockStore(initialState);
 store.dispatch(actions.decideRequest(rideId, rideId, true)).then(() => {
   // return of async actions
   expect(store.getActions()).toEqual(expectedActions);
   done();
 });
});

it('decide a request failed', (done) => {
 moxios.stubRequest(decideUrl, { status: 400, response: mockData.rides.error.response});

const expectedActions = [
  { type: 'GET_RIDES_STARTED' },
  {"error": "Check your network or contact web admin", "type": "ERROR_SET"},
  {"type": "GET_RIDES_FAILED"}
];
const store = mockStore(initialState);
store.dispatch(actions.decideRequest(rideId, rideId, true)).then(() => {
  // return of async actions
  expect(store.getActions()).toEqual(expectedActions);
  done();
});
});
});
