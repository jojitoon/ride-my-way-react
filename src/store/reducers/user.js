import {
  USER_STARTED,
  USER_SUCCESS,
  USER_FAILED} from '../constants';

const initialState = {
  loading: false,
  user: null,
}

const userReducer = (state=initialState, action)  => {
  switch (action.type) {
  case USER_STARTED:
    return {
      ...state,
      loading: true
    };
  case USER_SUCCESS:
  return {
    ...state,
    loading: false,
    user: action.user,
  };
  case USER_FAILED:
  return {
    ...state,
    loading: false
  };
  default:
    return state
  }
};

export default userReducer;
