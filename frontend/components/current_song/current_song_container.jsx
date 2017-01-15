import React from 'react';
import { connect } from 'react-redux';
import CurrentSong from './current_song.jsx';
import { fetchCurrentSong } from '../../actions/songs_actions';

const mapStateToProps = ({ currentSong }) => ({
  currentSong
});

// const mapDispatchToProps = dispatch => ({
//   fetchCurrentSong: id => dispatch(fetchCurrentSong(id))
// });

export default connect(
  mapStateToProps
)(CurrentSong);
