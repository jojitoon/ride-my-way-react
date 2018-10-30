import {
  MESSAGE_SET,
  MESSAGE_CLEAR_ALL,
  ERROR_SET
} from '../constants';

export const setMessage = (message) => {
    return {
        type: MESSAGE_SET,
        message
    }
}

export const setError = (error) => {
    return {
        type: ERROR_SET,
        error
    }
}

export const clearMessages = () => {
    return {
        type: MESSAGE_CLEAR_ALL,
    }
}
