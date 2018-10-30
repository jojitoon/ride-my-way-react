import { combineReducers } from 'redux';

import auth from './auth';
import message from './message';
import rides from './rides';
import user from './user';

const rootReducer = combineReducers({
  auth,
  message,
  rides,
  user
});

export default rootReducer;
