import { merge } from 'lodash';
import { RECEIVE_USER } from '../actions/users_actions';
import { UNFOLLOW_PLAYLIST } from '../actions/playlists_actions';

const _defaultState ={
  index: {},
  detail: {}
};

const usersReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      return merge({}, _defaultState, {
        detail: action.user
      });
    case UNFOLLOW_PLAYLIST:
      let newState = merge({}, state);
      let followedPlaylists = newState.detail.followedPlaylists;
      delete followedPlaylists[action.playlistId];
      newState.detail.followedPlaylists = followedPlaylists;
      return newState;
    default:
      return state;
  }
};

export default usersReducer;
