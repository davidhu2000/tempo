import { createStore, applyMiddleware } from 'redux';
import thunk from '../middleware/thunk';
import rootReducer from '../reducers/root_reducer.js';

const _defaultState = {
  session: {
    currentUser: null,
    errors: []
  }
};

const configureStore = (preloadedState = _defaultState) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
  )
);

export default configureStore;
