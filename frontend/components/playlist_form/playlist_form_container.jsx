import React from 'react';
import { connect } from 'react-redux';
import PlaylistForm from './playlist_form.jsx';

import { updatePlaylist, createPlaylist } from '../../actions/playlists_actions';

const mapStateToProps = (state, ownProps) => ({
  playlist: state.playlists.detail
});

const mapDispatchToProps = dispatch => ({
  updatePlaylist: playlist => dispatch(updatePlaylist(playlist)),
  createPlaylist: playlist => dispatch(createPlaylist(playlist)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistForm);
