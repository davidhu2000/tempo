import React from 'react';
import { connect } from 'react-redux';
import MusicPlayer from './music_player.jsx';

import { receiveCurrentSong, clearCurrentSong } from '../../actions/songs_actions';
import { removeFirstSong } from '../../actions/queue_actions';

const mapStateToProps = (state, ownProps) => ({
  queue: state.queue,
  currentSong: state.currentSong
});

const mapDispatchToProps = dispatch => ({
  receiveCurrentSong: song => dispatch(receiveCurrentSong(song)),
  removeFirstSong: () => dispatch(removeFirstSong()),
  clearCurrentSong: () => dispatch(clearCurrentSong())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MusicPlayer);
