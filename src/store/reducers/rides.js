import {
  GET_RIDES_STARTED,
  GET_RIDES_SUCCESS,
  GET_RIDES_FAILED} from '../constants';

const initialState = {
  loading: false,
  rides: []
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
