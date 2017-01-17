import { merge } from 'lodash';
import { RECEIVE_ARTIST, RECEIVE_ALL_ARTISTS } from '../actions/artists_actions';

const _defaultState = {
  index: {},
  detail: {}
};

const artistsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_ARTISTS:
      return merge({}, _defaultState, {
        index: action.artists
      });
    case RECEIVE_ARTIST:
      return merge({}, _defaultState, {
        detail: action.artist
      });
    default:
      return state;
  }
};

export default artistsReducer;
