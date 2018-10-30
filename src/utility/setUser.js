import { authSuccess } from 'Store/actions/auth';
import setAxios from './setAxios';

const setUser = (store) => {
  if (localStorage.userToken) {
    const token = localStorage.getItem('userToken');
    const expireAt = localStorage.getItem('expireAt');

    if (new Date() < new Date(expireAt)) {
      store.dispatch(authSuccess(token));
      setAxios(token);
    } else {
      localStorage.removeItem('userToken');
      localStorage.removeItem('expireAt');
    }
  }
};

export default setUser;
