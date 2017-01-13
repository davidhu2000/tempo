import { merge } from 'lodash';
import { RECEIVE_SONG, RECEIVE_ALL_SONGS } from '../actions/songs_actions';

const _defaultState = {
  index: {},
  detail: {}
};

const songsReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_SONGS:
      return merge({}, state, {
        index: action.songs
      });
    case RECEIVE_SONG:
      return merge({}, state, {
        detail: action.song
      });

    default:
      return state;
  }
};

export default songsReducer;
