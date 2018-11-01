import {
  USER_AUTH_STARTED,
  USER_AUTH_SUCCESS,
  USER_LOGOUT,
  USER_AUTH_FAILED} from '../constants';

const initialState = {
  loading: false,
  token: null,
  auth: false
}

const authReducer = (state=initialState, action)  => {
  switch (action.type) {
  case USER_AUTH_STARTED:
    return {
      ...state,
      loading: true
    };
  case USER_AUTH_SUCCESS:
  return {
    ...state,
    loading: false,
    token: action.token,
    auth: true
  };
  case USER_AUTH_FAILED:
  return {
    ...state,
    loading: false
  };
  case USER_LOGOUT:
  return {
    ...state,
    auth: false,
    token: null
  };
  default:
    return state
  }
};

export default authReducer;
