import React from 'react';
import { connect } from 'react-redux';
import ArtistIndex from './artist_index.jsx';

const mapStateToProps = (state, ownProps) => ({
  // your code here...
});

const mapDispatchToProps = dispatch => ({
  // your code here...
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistIndex);
