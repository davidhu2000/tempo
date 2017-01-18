import React from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';
import Songs from './song_index.jsx';

import { fetchSong, fetchAllSongs, fetchCurrentSong } from '../../actions/songs_actions';
import { addToQueue } from '../../actions/queue_actions';

const mapStateToProps = ({ songs }, ownProps) => ({
  songs: values(songs.index)
});

const mapDispatchToProps = dispatch => ({
  fetchSong: id => dispatch(fetchSong(id)),
  fetchAllSongs: (limit) => dispatch(fetchAllSongs(limit)),
  fetchCurrentSong: id => dispatch(fetchCurrentSong(id)),
  addToQueue: song => dispatch(addToQueue(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Songs);
