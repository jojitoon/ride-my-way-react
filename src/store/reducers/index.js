import { combineReducers } from 'redux';

import auth from './auth';
import message from './message';
import rides from './rides';

const rootReducer = combineReducers({
  auth,
  message,
  rides
});

export default rootReducer;
