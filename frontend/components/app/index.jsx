import React from 'react';
import { connect } from 'react-redux';
import App from './app';

import { logout } from '../../actions/session_actions';
import { removePopup } from '../../actions/popup_actions';

const mapStateToProps = ({ session, currentSong, errors, popups }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: errors,
  currentUser: session.currentUser,
  currentSong,
  popups
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  removePopup: () => dispatch(removePopup())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
