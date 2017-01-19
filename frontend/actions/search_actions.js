import * as SearchApiUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_SONGS = 'RECEIVE_SEARCH_SONGS';
export const RECEIVE_SEARCH_ALBUMS = 'RECEIVE_SEARCH_ALBUMS';
export const RECEIVE_SEARCH_PLAYLISTS = 'RECEIVE_SEARCH_PLAYLISTS';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

export const receiveSearchSongs = songs => ({
  type: RECEIVE_SEARCH_SONGS,
  songs
});

export const receiveSearchAlbums = albums => ({
  type: RECEIVE_SEARCH_ALBUMS,
  albums
});

export const receiveSearchPlaylists = playlists => ({
  type: RECEIVE_SEARCH_PLAYLISTS,
  playlists
});

export const clearSearch = () => ({
  type: CLEAR_SEARCH
});

export const fetchSearchSongs = query => dispatch => (
  SearchApiUtil.fetchSearchSongs(query)
    .then(
      res => dispatch(receiveSearchSongs(res))
    )
);

window.fetchSearchSongs = fetchSearchSongs;
