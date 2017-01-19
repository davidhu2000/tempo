import { merge } from 'lodash';
import {
  CLEAR_SEARCH,
  RECEIVE_SEARCH_SONGS,
  RECEIVE_SEARCH_ALBUMS,
  RECEIVE_SEARCH_ARTISTS,
  RECEIVE_SEARCH_PLAYLISTS
} from '../actions/search_actions';

const _defaultState = {
  songs: {},
  albums: {},
  artists: {},
  playlists: {}
};

const searchReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  console.log('searchReducer');
  console.log(action);
  switch(action.type) {
    case RECEIVE_SEARCH_SONGS:
      let songsState = {
        songs: action.songs,
        albums: state.albums,
        artists: state.artists,
        playlists: state.playlists
      };
      return songsState;
    case RECEIVE_SEARCH_ALBUMS:
      let albumsState = {
        songs: state.songs,
        albums: action.albums,
        artists: state.artists,
        playlists: state.playlists
      };
      return albumsState;
    case RECEIVE_SEARCH_ARTISTS:
      let artistsState = {
        songs: state.songs,
        albums: state.albums,
        artists: action.artists,
        playlists: state.playlists
      };
      return artistsState;
    case RECEIVE_SEARCH_PLAYLISTS:
      let playlistsState = {
        songs: state.songs,
        albums: state.albums,
        artists: state.artists,
        playlists: action.playlists
      };
      return playlistsState;
    case CLEAR_SEARCH:
      return _defaultState;
    default:
      return state;
  }
};

export default searchReducer;
