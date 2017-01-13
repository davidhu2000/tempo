import { merge } from 'lodash';

import { RECEIVE_SONG } from '../actions/current_song_actions';

const _defaultState = {};

const currentSongReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SONG:
      return action.currentSong;
    default:
      return state;
  }
};

export default currentSongReducer;
