import axios from 'axios';
import setAxios from 'Utility/setAxios';
import { setError, setMessage } from './message';

import {
  USER_AUTH_STARTED,
  USER_AUTH_SUCCESS,
  USER_AUTH_FAILED} from '../constants';

/**
 * Action Creators for auth reducer
**/

const today = new Date();
const expireAt = new Date(today.setFullYear(today.getFullYear() + 1));

const authStarted = () => {
    return {
        type: USER_AUTH_STARTED,
    }
}

export const authSuccess = (token) => {
    return {
        type: USER_AUTH_SUCCESS,
        token
    }
}

const authFailed = () => {
    return {
        type: USER_AUTH_FAILED,
    }
}

export const signupUser = (userData, history) => (dispatch) => {
dispatch(authStarted());
  return axios.post('/auth/signup', userData)
    .then((response) => {
      dispatch(authSuccess(response.data.data.token));
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
      return dispatch(authFailed());
    });
};

export const loginUser = (userData, history) => (dispatch) => {
dispatch(authStarted());
  return axios.post('/auth/signin', userData)
    .then((response) => {
      dispatch(authSuccess(response.data.data.token));
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
      return dispatch(authFailed());
    });
};

export const logoutUser = (history) => () => {
      localStorage.clear('userToken');
      history.push('/signin');
};
