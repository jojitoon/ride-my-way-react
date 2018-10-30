import {
  USER_SIGNUP_STARTED,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILED} from '../constants';

const initialState = {
  loading: false,
  token: null,
  auth: false
}

const authReducer = (state=initialState, action)  => {
  switch (action.type) {
  case USER_SIGNUP_STARTED:
    return {
      ...state,
      loading: true
    };
  case USER_SIGNUP_SUCCESS:
  return {
    ...state,
    loading: false,
    token: action.token,
    auth: true
  };
  case USER_SIGNUP_FAILED:
  return {
    ...state,
    loading: false
  };
  default:
    return state
  }
};

export default authReducer;
