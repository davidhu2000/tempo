import React from 'react';
import { connect } from 'react-redux';
import CurrentUserDetail from './current_user_detail.jsx';

import { createPlaylist } from '../../actions/playlists_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createPlaylist: playlist => dispatch(createPlaylist(playlist))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentUserDetail);
