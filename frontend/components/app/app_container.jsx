import React from 'react';
import { connect } from 'react-redux';
import App from './app';

import { logout } from '../../actions/session_actions';

const mapStateToProps = ({ session, currentSong }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors,
  currentSong
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
