import React from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';
import PlaylistDetail from './playlist_detail.jsx';

import { fetchPlaylist } from '../../actions/playlists_actions';
import { fetchCurrentSong } from '../../actions/songs_actions';
import { addToQueue } from '../../actions/queue_actions';
import { updatePlaylist, deletePlaylist, addFollowerToPlaylist } from '../../actions/playlists_actions';

const mapStateToProps = ({ playlists, session }, ownProps) => ({
  playlist: playlists.detail,
  songs: values(playlists.detail.songs),
  playlistId: ownProps.params.playlistId,
  currentUserId: session.currentUser.id
});

const mapDispatchToProps = dispatch => ({
  fetchPlaylist: id => dispatch(fetchPlaylist(id)),
  fetchCurrentSong: id => dispatch(fetchCurrentSong(id)),
  addToQueue: song => dispatch(addToQueue(song)),
  updatePlaylist: playlist => dispatch(updatePlaylist(playlist)),
  deletePlaylist: id => dispatch(deletePlaylist(id)),
  addFollowerToPlaylist: id => dispatch(addFollowerToPlaylist(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistDetail);
