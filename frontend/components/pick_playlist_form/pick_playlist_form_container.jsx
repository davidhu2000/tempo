import React from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';
import PickPlaylistForm from './pick_playlist_form.jsx';
import { addSongToPlaylist, fetchAllPlaylists } from '../../actions/playlists_actions';

const mapStateToProps = (state, ownProps) => ({
  ownerId: state.session.currentUser.id,
  playlists: values(state.playlists.index)
});

const mapDispatchToProps = dispatch => ({
  fetchAllPlaylists: filter => dispatch(fetchAllPlaylists(filter)),
  addSongToPlaylist: playlist_song => dispatch(addSongToPlaylist(playlist_song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PickPlaylistForm);
