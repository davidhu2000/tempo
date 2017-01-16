import { merge } from 'lodash';
import { RECEIVE_ALBUM, RECEIVE_ALL_ALBUMS } from '../actions/albums_actions';

const _defaultState = {
  index: {},
  detail: {}
};

const albumsReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_ALBUMS:
      return merge({}, state, {
        index: action.albums
      });
    case RECEIVE_ALBUM:
      return { detail: action.album };
    default:
      return state;
  }
};

export default albumsReducer;
