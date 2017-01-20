import { merge } from 'lodash';

const _defaultState = [];

const popupsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  }
};

export default popupsReducer;
