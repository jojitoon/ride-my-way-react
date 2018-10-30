import axios from 'axios';
import { setError, setMessage } from './message';

import {
  GET_RIDES_STARTED,
  GET_RIDES_SUCCESS,
  GET_RIDES_FAILED,
  GET_RIDE_SUCCESS,
  CREATE_RIDE_SUCCESS
} from '../constants';

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

export const singleRideSuccess = (ride) => {
    return {
        type: GET_RIDE_SUCCESS,
        ride
    }
}
export const createRideSuccess = () => {
    return {
        type: CREATE_RIDE_SUCCESS,
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

export const getRide = (rideId) => (dispatch) => {
dispatch(rideStarted());
  return axios.get(`/rides/${rideId}`)
    .then((response) => {
      dispatch(singleRideSuccess(response.data.data.ride));
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

export const createRide = (rideData, history) => (dispatch) => {
dispatch(rideStarted());
  return axios.post('/users/rides', rideData)
    .then((response) => {
      dispatch(createRideSuccess());
      dispatch(setMessage("Ride was created successfully!"));
      history.push('/rides');
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
