import React from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';
import Songs from './song_index.jsx';

import { fetchSong, fetchAllSongs, fetchCurrentSong } from '../../actions/songs_actions';

const mapStateToProps = ({ songs }, ownProps) => ({
  songs: values(songs.index)
});

const mapDispatchToProps = dispatch => ({
  fetchSong: id => dispatch(fetchSong(id)),
  fetchAllSongs: () => dispatch(fetchAllSongs()),
  fetchCurrentSong: id => dispatch(fetchCurrentSong(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Songs);
