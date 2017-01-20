import { merge } from 'lodash';
import { RECEIVE_POPUP, REMOVE_POPUP } from '../actions/popup_actions';

const _defaultState = [];

const popupsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  console.log(state);
  switch(action.type) {
    case RECEIVE_POPUP:
      return merge([], state).concat([action.popup]);
    case REMOVE_POPUP:
      let newState = merge([], state);
      newState.shift();
      return newState;
    default:
      return state;
  }
};

export default popupsReducer;
