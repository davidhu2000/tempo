import React from 'react';
import { connect } from 'react-redux';
import Popup from './popup.jsx';

const mapStateToProps = ({ popups }, ownProps) => ({
  popups
});

const mapDispatchToProps = dispatch => ({
  // your code here...
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Popup);
