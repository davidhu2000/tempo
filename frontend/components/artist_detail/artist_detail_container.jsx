import React from 'react';
import { connect } from 'react-redux';
import ArtistDetail from './artist_detail.jsx';

import { fetchArtist } from '../../actions/artists_actions';

const mapStateToProps = ({ artists }, ownProps) => ({
  artist: artists.detail,
  artistId: ownProps.params.artistId,
  albums: []
});

const mapDispatchToProps = dispatch => ({
  fetchArtist: id => dispatch(fetchArtist(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistDetail);
