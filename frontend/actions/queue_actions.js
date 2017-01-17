import * as AlbumsApiUtil from '../util/albums_api_util';
import * as PlaylistsApiUtil from '../util/playlists_api_util';
import { values } from 'lodash';
import { receiveCurrentSong } from './songs_actions';

export const ADD_TO_QUEUE = 'ADD_TO_QUEUE';
export const SHUFFLE_QUEUE = 'SHUFFLE_QUEUE';
export const CLEAR_QUEUE = 'CLEAR_QUEUE';
export const REMOVE_FIRST_SONG = 'REMOVE_FIRST_SONG';
export const ADD_ALBUM_TO_QUEUE = 'ADD_ALBUM_TO_QUEUE';

export const addToQueue = song => ({
  type: ADD_TO_QUEUE,
  song
});

export const addAlbumToQueue = songs => ({
  type: ADD_ALBUM_TO_QUEUE,
  songs
});

export const shuffleQueue = () => ({
  type: SHUFFLE_QUEUE
});

export const clearQueue = () => ({
  type: CLEAR_QUEUE
});

export const removeFirstSong = () => ({
  type: REMOVE_FIRST_SONG
});

export const fetchAlbumToQueue = id => dispatch => (
  AlbumsApiUtil.fetchAlbum(id).then(
    res => dispatch(addAlbumToQueue(values(res.songs)))
  )
);

export const playFirstSongAndAddAlbumToQueue = id => dispatch => (
  AlbumsApiUtil.fetchAlbum(id).then(
    res => {
      dispatch(receiveCurrentSong( values(res.songs)[0] ));
      return dispatch(addAlbumToQueue( values(res.songs).slice(1) ));
    }
  )
);

export const fetchPlaylistToQueue = id => dispatch => (
  PlaylistsApiUtil.fetchPlaylist(id).then(
    res => dispatch(addAlbumToQueue(values(res.songs)))
  )
);

export const playFirstSongAndAddPlaylistToQueue = id => dispatch => (
  PlaylistsApiUtil.fetchPlaylist(id).then(
    res => {
      dispatch(receiveCurrentSong( values(res.songs)[0] ));
      return dispatch(addAlbumToQueue( values(res.songs).slice(1) ));
    }
  )
);
