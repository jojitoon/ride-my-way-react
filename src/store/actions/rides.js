import axios from 'axios';
import { setError } from './message';

import {
  GET_RIDES_STARTED,
  GET_RIDES_SUCCESS,
  GET_RIDES_FAILED} from '../constants';

/**
 * Action Creators for auth reducer
**/

const rideStarted = () => {
    return {
        type: GET_RIDES_STARTED,
    }
}

export const rideSuccess = (rides) => {
    return {
        type: GET_RIDES_SUCCESS,
        rides
    }
}

const ridesFailed = () => {
    return {
        type: GET_RIDES_FAILED,
    }
}

export const getAllRides = () => (dispatch) => {
dispatch(rideStarted());
  return axios.get('/rides')
    .then((response) => {
      dispatch(rideSuccess(response.data.data.rides));
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
      return dispatch(ridesFailed());
    });
};
