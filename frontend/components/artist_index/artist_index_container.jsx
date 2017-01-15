import React from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';
import ArtistIndex from './artist_index.jsx';

import { fetchAllArtists, fetchAlbum } from '../../actions/artists_actions';

const mapStateToProps = ({ artists }) => ({
  artists: values(artists.index)
});

const mapDispatchToProps = dispatch => ({
  fetchAllArtists: () => dispatch(fetchAllArtists()),
  fetchArtist: id => dispatch(fetchArtist(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistIndex);
