import { combineReducers } from 'redux';

import auth from './auth';
import message from './message';
import rides from './rides';
import user from './user';
import nav from './navs';

const rootReducer = combineReducers({
  auth,
  message,
  rides,
  user,
  nav
});

export default rootReducer;
