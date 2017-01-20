import React from 'react';
import { connect } from 'react-redux';
import CurrentSong from './current_song.jsx';
import { fetchCurrentSong } from '../../actions/songs_actions';

const mapStateToProps = ({ currentSong }) => ({
  currentSong
});

export default connect(
  mapStateToProps
)(CurrentSong);
