import { merge } from 'lodash';

const _nullUser = {
  currentUser: null,
  errors: []
};

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  }
};

export default sessionReducer;
