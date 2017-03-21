import React from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';
import PlaylistIndex from './playlist_index.jsx';

import {
  fetchAllPlaylists,
  fetchPlaylist,
  addFollowerToPlaylist
} from '../../actions/playlists_actions';

import {
  fetchPlaylistToQueue,
  playFirstSongAndAddPlaylistToQueue
} from '../../actions/queue_actions';

const mapStateToProps = ({ playlists }) => ({
  playlists: values(playlists.index),
  followType: 'Follow'
});

const mapDispatchToProps = dispatch => ({
  fetchAllPlaylists: filter => dispatch(fetchAllPlaylists(filter)),
  fetchPlaylist: id => dispatch(fetchPlaylist(id)),
  fetchPlaylistToQueue: id => dispatch(fetchPlaylistToQueue(id)),
  playFirstSongAndAddPlaylistToQueue: id => dispatch(playFirstSongAndAddPlaylistToQueue(id)),
  playlistFollowAction: id => dispatch(addFollowerToPlaylist(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistIndex);
