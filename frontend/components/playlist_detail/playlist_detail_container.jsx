import React from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';
import PlaylistDetail from './playlist_detail.jsx';

import { fetchPlaylist } from '../../actions/playlists_actions';
import { fetchCurrentSong } from '../../actions/songs_actions';
import { addToQueue } from '../../actions/queue_actions';

const mapStateToProps = ({ playlists }, ownProps) => ({
  playlist: playlists.detail,
  songs: values(playlists.detail.songs),
  playlistId: ownProps.params.playlistId
});

const mapDispatchToProps = dispatch => ({
  fetchPlaylist: id => dispatch(fetchPlaylist(id)),
  fetchCurrentSong: id => dispatch(fetchCurrentSong(id)),
  addToQueue: song => dispatch(addToQueue(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistDetail);
