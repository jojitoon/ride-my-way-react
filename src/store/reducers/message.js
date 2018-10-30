import {
  MESSAGE_SET,
  ERROR_SET,
  MESSAGE_CLEAR_ALL} from '../constants';

const initialState = {
  error: null,
  message: null
}

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case MESSAGE_SET:
      return {
        ...state,
        message: action.message
      };
    case ERROR_SET:
      return {
        ...state,
        error: action.error
      };
    case MESSAGE_CLEAR_ALL:
    return {
      ...state,
      message: null,
      error: null
    };
    default:
      return state;
  }
}

export default messageReducer;
