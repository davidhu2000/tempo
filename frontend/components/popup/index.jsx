import React from 'react';
import { connect } from 'react-redux';
import Popup from './popup.jsx';

import { receivePopup, removePopup } from '../../actions/popup_actions';

const mapStateToProps = ({ popups }, ownProps) => ({
  popup: popups[0]
});

const mapDispatchToProps = dispatch => ({
  removePopup: () => dispatch(removePopup())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Popup);
