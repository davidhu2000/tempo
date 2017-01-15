import React from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';
import AlbumDetail from './album_detail.jsx';

import { fetchAlbum } from '../../actions/albums_actions';
import { fetchCurrentSong } from '../../actions/songs_actions';

const mapStateToProps = ({ albums, songs }, ownProps) => ({
  album: albums.detail,
  songs: values(songs.index),
  albumId: ownProps.params.albumId
});

const mapDispatchToProps = dispatch => ({
  fetchAlbum: id => dispatch(fetchAlbum(id)),
  fetchCurrentSong: id => dispatch(fetchCurrentSong(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumDetail);
