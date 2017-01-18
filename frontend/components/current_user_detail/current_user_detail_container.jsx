import React from 'react';
import { connect } from 'react-redux';
import CurrentUserDetail from './current_user_detail.jsx';

import { createPlaylist } from '../../actions/playlists_actions';
import { fetchUser } from '../../actions/users_actions';

import {
  fetchPlaylistToQueue,
  playFirstSongAndAddPlaylistToQueue,
} from '../../actions/queue_actions';

import {
  fetchAllPlaylists,
  fetchPlaylist,
  addFollowerToPlaylist
} from '../../actions/playlists_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  user: state.users.detail
});

const mapDispatchToProps = dispatch => ({
  createPlaylist: playlist => dispatch(createPlaylist(playlist)),
  fetchUser: id => dispatch(fetchUser(id)),
  playFirstSongAndAddPlaylistToQueue: id => dispatch(playFirstSongAndAddPlaylistToQueue(id)),
  addFollowerToPlaylist: id => dispatch(addFollowerToPlaylist(id)),
  fetchPlaylistToQueue: id => dispatch(fetchPlaylistToQueue(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentUserDetail);
