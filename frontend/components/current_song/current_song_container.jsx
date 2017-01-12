import React from 'react';
import { connect } from 'react-redux';
import CurrentSong from './current_song.jsx';

const mapStateToProps = ({ currentSong }) => ({
  currentSong
});

const mapDispatchToProps = dispatch => ({
  // your code here...
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentSong);
