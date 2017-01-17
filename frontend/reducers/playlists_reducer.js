import { merge } from 'lodash';
import { RECEIVE_PLAYLIST, RECEIVE_ALL_PLAYLISTS } from '../actions/playlists_actions';

const _defaultState = {
  index: {},
  detail: {}
};

const playlistsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_PLAYLISTS:
      return merge({}, _defaultState, {
        index: action.playlists
      });
    case RECEIVE_PLAYLIST:
      return merge({}, _defaultState, {
        detail: action.playlist
      });
    default:
      return state;
  }
};

export default playlistsReducer;
