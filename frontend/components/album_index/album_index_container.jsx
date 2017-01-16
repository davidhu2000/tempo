import React from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';
import AlbumIndex from './album_index.jsx';

import { fetchAllAlbums, fetchAlbum } from '../../actions/albums_actions';
import { fetchAlbumToQueue, playFirstSongAndAddAlbumToQueue } from '../../actions/queue_actions';

const mapStateToProps = ({ albums }) => ({
  albums: values(albums.index)
});

const mapDispatchToProps = dispatch => ({
  fetchAllAlbums: () => dispatch(fetchAllAlbums()),
  fetchAlbum: id => dispatch(fetchAlbum(id)),
  fetchAlbumToQueue: id => dispatch(fetchAlbumToQueue(id)),
  playFirstSongAndAddAlbumToQueue: id => dispatch(playFirstSongAndAddAlbumToQueue(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumIndex);
