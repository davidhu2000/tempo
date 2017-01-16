import React from 'react';
import { connect } from 'react-redux';
import UserDetail from './user_detail.jsx';

const mapStateToProps = (state, ownProps) => ({
  // your code here...
});

const mapDispatchToProps = dispatch => ({
  // your code here...
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetail);
