import axios from 'axios';
import { setError, setMessage } from './message';

import {
  GET_RIDES_STARTED,
  GET_RIDES_SUCCESS,
  GET_RIDES_FAILED,
  GET_RIDE_SUCCESS,
  GET_REQUEST_SUCCESS,
  GET_MY_REQUEST_SUCCESS,
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

export const requestSuccess = (request) => {
    return {
        type: GET_REQUEST_SUCCESS,
        request
    }
}

export const myRequestSuccess = (request) => {
    return {
        type: GET_MY_REQUEST_SUCCESS,
        request
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
      if (error.response.data.status === "error" && error.response.data.message) {
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
      if (error.response.data.status === "error" && error.response.data.message) {
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
    .then(() => {
      dispatch(createRideSuccess());
      dispatch(setMessage("Ride was created successfully!"));
      history.push('/rides');
    })
    .catch((error) => {
      if (error.response.data.status === "error" && error.response.data.message) {
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

export const getRequest = () => (dispatch) => {
 dispatch(rideStarted());
  return axios.get('/requests')
    .then((response) => {
      dispatch(requestSuccess(response.data.data));
    })
    .catch((error) => {
      if (error.response.data.status === "error" && error.response.data.message) {
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

export const getYourRequest = (ride) => (dispatch) => {
 dispatch(rideStarted());
  return axios.get(`/rides/${ride}/requests`)
    .then((response) => {
      dispatch(myRequestSuccess(response.data.data.request));
    })
    .catch((error) => {
      if (error.response.data.status === "error" && error.response.data.message) {
        dispatch(myRequestSuccess(error.response.data.data));
        }
      else if (error.response.data.status === "fail") {
        dispatch(myRequestSuccess(error.response.data.data));
        }
      else {
        dispatch(setError("Check your network or contact web admin"))
      }
      return dispatch(ridesFailed());
    });
};

export const joinRide = (ride) => (dispatch) => {
 dispatch(rideStarted());
  return axios.post(`rides/${ride}/requests`)
    .then(() => {
      dispatch(createRideSuccess());
      dispatch(setMessage("Your request has been sent successfully."))
    })
    .catch((error) => {
      if (error.response.data.status === "error" && error.response.data.message) {
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

export const decideRequest = (ride, request, state) => (dispatch) => {
 dispatch(rideStarted());
  return axios.put(`rides/${ride}/requests/${request}`, {accept: state})
    .then((response) => {
      dispatch(getRequest());
      dispatch(setMessage(response.data.data.message))
    })
    .catch((error) => {
      if (error.response.data.status === "error" && error.response.data.message) {
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
