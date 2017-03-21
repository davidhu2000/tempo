import React from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';
import Search from './search';

import {
  clearSearch,
  fetchSearchResult,
} from '../../actions/search_actions';

const mapStateToProps = ({ search }) => ({
  songs: values(search.songs),
  albums: values(search.albums),
  artists: values(search.artists),
  playlists: values(search.playlists)
});

const mapDispatchToProps = dispatch => ({
  clearSearch: () => dispatch(clearSearch()),
  fetchSearchResult: query => dispatch(fetchSearchResult(query)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
