import {
  CHANGE_NAV
} from '../constants';

const initialState = {
  open: false
}

const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NAV:
      return {
        ...state,
        open: !state.open
      };
    default:
      return state;
  }
}

export default navReducer;
