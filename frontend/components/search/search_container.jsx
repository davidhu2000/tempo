import React from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';
import Search from './search';

import {
  fetchSearchSongs,
  fetchSearchAlbums,
  fetchSearchPlaylists
} from '../../actions/search_actions';

const mapStateToProps = ({ search }) => ({
  songs: values(search.songs),
  albums: values(search.albums),
  playlists: values(search.playlists)
});

const mapDispatchToProps = dispatch => ({
  fetchSearchSongs: query => dispatch(fetchSearchSongs(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
