import { merge } from 'lodash';

import {
  RECEIVE_CURRENT_SONG,
  CLEAR_CURRENT_SONG
} from '../actions/songs_actions';

const _defaultState = {};

const currentSongReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_SONG:
      return action.currentSong;
    case CLEAR_CURRENT_SONG:
      return {};
    default:
      return state;
  }
};

export default currentSongReducer;
