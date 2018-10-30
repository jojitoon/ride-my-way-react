import axios from 'axios';
/**
 * @description - set token to request headers
 *
 * @param {string} token - Default application state
 *
 * @returns {void} no return or void
 */
const setAuthorizationToken = (token) => {
  if (token) {
    axios.defaults.headers.common['x-token-access'] = token;
  } else {
    delete axios.defaults.headers.common['x-token-access'];
  }
};
export default setAuthorizationToken;
