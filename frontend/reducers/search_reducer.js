import { merge } from 'lodash';
import {
  RECEIVE_SEARCH_SONGS,
  RECEIVE_SEARCH_ALBUMS,
  RECEIVE_SEARCH_PLAYLISTS
} from '../actions/search_actions';

const _defaultState = {
  songs: {},
  albums: {},
  playlists: {}
};

const searchReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SEARCH_SONGS:
      let songsState = {
        songs: action.songs,
        albums: state.albums,
        playlists: state.playlists
      };
      return songsState;
    default:
      return state;
  }
};

export default searchReducer;
