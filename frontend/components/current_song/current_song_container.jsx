import React from 'react';
import { connect } from 'react-redux';
import CurrentSong from './current_song.jsx';
import { fetchSong } from '../../actions/current_song_actions';

const mapStateToProps = ({ currentSong }) => ({
  currentSong
});

const mapDispatchToProps = dispatch => ({
  fetchSong: id => dispatch(fetchSong(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentSong);
