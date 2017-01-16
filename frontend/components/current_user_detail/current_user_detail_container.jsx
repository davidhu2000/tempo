import React from 'react';
import { connect } from 'react-redux';
import CurrentUserDetail from './current_user_detail.jsx';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentUserDetail);
