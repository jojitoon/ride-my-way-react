import axios from 'axios';
import { setError } from './message';

import {
  USER_STARTED,
  USER_SUCCESS,
  USER_FAILED} from '../constants';
/**
 * Action Creators for auth reducer
**/

const profileStarted = () => {
    return {
        type: USER_STARTED,
    }
}

export const profileSuccess = (user) => {
    return {
        type: USER_SUCCESS,
        user
    }
}

const profilesFailed = () => {
    return {
        type: USER_FAILED,
    }
}

export const getProfile = () => (dispatch) => {
dispatch(profileStarted());
  return axios.get('/auth/profile')
    .then((response) => {
      dispatch(profileSuccess(response.data.data));
    })
    .catch((error) => {
      if (error.response.data.status === "error") {
          dispatch(setError(error.response.data.message))
        }
      else if (error.response.data.status === "fail") {
          dispatch(setError(error.response.data.data.message))
        }
      else {
        dispatch(setError("Check your network or contact web admin"))
      }
      return dispatch(profilesFailed());
    });
};
