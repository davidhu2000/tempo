import * as PlaylistsApiUtil from '../util/playlists_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_ALL_PLAYLISTS = 'RECEIVE_ALL_PLAYLISTS';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';

export const receiveAllPlaylists = playlists => ({
  type: RECEIVE_ALL_PLAYLISTS,
  playlists
});

export const receivePlaylist = playlist => ({
  type: RECEIVE_PLAYLIST,
  playlist
});

export const fetchAllPlaylists = () => dispatch => (
  PlaylistsApiUtil.fetchAllPlaylists()
    .then(
      res => dispatch(receiveAllPlaylists(res))
    )
);

export const fetchPlaylist = id => dispatch => (
  PlaylistsApiUtil.fetchPlaylist(id)
    .then(
      res => dispatch(receivePlaylist(res))
    )
);

export const createPlaylist = playlist => dispatch => (
  PlaylistsApiUtil.createPlaylist(playlist)
    .then(
      res => dispatch(receivePlaylist(res))
    )
);

export const updatePlaylist = playlist => dispatch => (
  PlaylistsApiUtil.updatePlaylist(playlist)
    .then(
      res => dispatch(receivePlaylist(res))
    )
);

export const deletePlaylist = id => dispatch => (
  PlaylistsApiUtil.deletePlaylist(id)
    .then(
      res => hashHistory.push('/playlists')
    )
);
