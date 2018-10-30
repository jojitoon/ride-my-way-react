import axios from 'axios';
import setAxios from 'Utility/setAxios';
import { setError, setMessage } from './message';

import {
  USER_SIGNUP_STARTED,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILED} from '../constants';

/**
 * Action Creators for auth reducer
**/

const today = new Date();
const expireAt = new Date(today.setFullYear(today.getFullYear() + 1));

const signupStarted = () => {
    return {
        type: USER_SIGNUP_STARTED,
    }
}

export const signupSuccess = (token) => {
    return {
        type: USER_SIGNUP_SUCCESS,
        token
    }
}

const signupFailed = () => {
    return {
        type: USER_SIGNUP_FAILED,
    }
}

export const signupUser = (userData, history) => (dispatch) => {
dispatch(signupStarted());
  return axios.post('/auth/signup', userData)
    .then((response) => {
      dispatch(signupSuccess(response.data.data.token));
      dispatch(setMessage(response.data.data.message));
      setAxios(response.data.data.token);
      localStorage.setItem('userToken', response.data.data.token);
      localStorage.setItem('expireAt', expireAt);
      history.push('/dashboard');
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
      return dispatch(signupFailed());
    });
};

export const loginUser = () => (dispatch) => {
dispatch(signupStarted());
};
