import {
  GET_RIDES_STARTED,
  GET_RIDES_SUCCESS,
  GET_RIDE_SUCCESS,
  CREATE_RIDE_SUCCESS,
  GET_RIDES_FAILED} from '../constants';

const initialState = {
  loading: false,
  rides: [],
  singleRide: null
}

const ridesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RIDES_STARTED:
      return {
        ...state,
        loading: true
      };
    case GET_RIDES_SUCCESS:
      return {
        ...state,
        loading: false,
        rides: action.rides
      };
    case GET_RIDE_SUCCESS:
      return {
        ...state,
        loading: false,
        singleRide: action.ride
      };
    case CREATE_RIDE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case GET_RIDES_FAILED:
    return {
      ...state,
        loading: false,
    };
    default:
      return state;
  }
}

export default ridesReducer;
