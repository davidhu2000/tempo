import React from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';
import Search from './search';

import {
  clearSearch,
  fetchSearchSongs,
  fetchSearchAlbums,
  fetchSearchArtists,
  fetchSearchPlaylists
} from '../../actions/search_actions';

const mapStateToProps = ({ search }) => ({
  songs: values(search.songs),
  albums: values(search.albums),
  artists: values(search.artists),
  playlists: values(search.playlists)
});

const mapDispatchToProps = dispatch => ({
  clearSearch: () => dispatch(clearSearch()),
  fetchSearchSongs: query => dispatch(fetchSearchSongs(query)),
  fetchSearchAlbums: query => dispatch(fetchSearchAlbums(query)),
  fetchSearchArtists: query => dispatch(fetchSearchArtists(query)),
  fetchSearchPlaylists: query => dispatch(fetchSearchPlaylists(query)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
