import React from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';
import Songs from './song_index.jsx';

import { fetchSong, fetchAllSongs, fetchCurrentSong } from '../../actions/songs_actions';
import { addToQueue } from '../../actions/queue_actions';
import { addSongToPlaylist } from '../../actions/playlists_actions';

const mapStateToProps = ({ songs }, ownProps) => ({
  songs: values(songs.index)
});

const mapDispatchToProps = dispatch => ({
  fetchSong: id => dispatch(fetchSong(id)),
  fetchAllSongs: (limit) => dispatch(fetchAllSongs(limit)),
  fetchCurrentSong: id => dispatch(fetchCurrentSong(id)),
  addToQueue: song => dispatch(addToQueue(song)),
  addSongToPlaylist: (songId, playlistId) => dispatch(addSongToPlaylist(songId, playlistId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Songs);
