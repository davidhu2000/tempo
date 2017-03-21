import React from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';
import AlbumDetail from './album_detail.jsx';

import { fetchAlbum } from '../../actions/albums_actions';
import { fetchCurrentSong } from '../../actions/songs_actions';
import { addToQueue, playFirstSongAndAddAlbumToQueue } from '../../actions/queue_actions';

const mapStateToProps = ({ albums }, ownProps) => ({
  album: albums.detail,
  songs: values(albums.detail.songs),
  albumId: ownProps.params.albumId
});

const mapDispatchToProps = dispatch => ({
  fetchAlbum: id => dispatch(fetchAlbum(id)),
  fetchCurrentSong: id => dispatch(fetchCurrentSong(id)),
  addToQueue: song => dispatch(addToQueue(song)),
  playFirstSongAndAddAlbumToQueue: id => dispatch(playFirstSongAndAddAlbumToQueue(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumDetail);
