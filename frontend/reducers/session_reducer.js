import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const _nullUser = {
  currentUser: null,
};

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, _nullUser, { currentUser: action.currentUser });
    default:
      return state;
  }
};

export default sessionReducer;
