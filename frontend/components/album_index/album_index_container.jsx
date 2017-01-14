import React from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';
import AlbumIndex from './album_index.jsx';

import { fetchAllAlbums, fetchAlbum } from '../../actions/albums_actions';

const mapStateToProps = ({ albums }) => ({
  albums: values(albums.index)
});

const mapDispatchToProps = dispatch => ({
  fetchAllAlbums: () => dispatch(fetchAllAlbums()),
  fetchAlbum: id => dispatch(fetchAlbum(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumIndex);
