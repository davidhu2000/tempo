import { merge } from 'lodash';
import { RECEIVE_USER } from '../actions/users_actions';

const _defaultState ={
  index: {},
  detail: {}
};

const usersReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  console.log('users reducer');
  console.log(action);
  switch(action.type) {
    case RECEIVE_USER:
      return merge({}, _defaultState, {
        detail: action.user
      });
    default:
      return state;
  }
};

export default usersReducer;
