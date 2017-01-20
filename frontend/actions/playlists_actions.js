import * as PlaylistsApiUtil from '../util/playlists_api_util';
import { hashHistory } from 'react-router';
import { receivePopup } from './popup_actions';

export const RECEIVE_ALL_PLAYLISTS = 'RECEIVE_ALL_PLAYLISTS';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const UNFOLLOW_PLAYLIST = 'UNFOLLOW_PLAYLIST';

export const receiveAllPlaylists = playlists => ({
  type: RECEIVE_ALL_PLAYLISTS,
  playlists
});

export const receivePlaylist = playlist => ({
  type: RECEIVE_PLAYLIST,
  playlist
});

export const unfollowPlaylist = playlistId => ({
  type: UNFOLLOW_PLAYLIST,
  playlistId
});

export const fetchAllPlaylists = filter => dispatch => (
  PlaylistsApiUtil.fetchAllPlaylists(filter)
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
    ).then(
      res => {
        dispatch(receivePopup({ message: 'Playlist created' }));
        let url = `/playlists/${res.playlist.id}`;
        hashHistory.push(url);
      }
    )
);

export const updatePlaylist = playlist => dispatch => (
  PlaylistsApiUtil.updatePlaylist(playlist)
    .then(
      res => {
        dispatch(receivePopup({ message: 'Playlist updated' }));
        return dispatch(receivePlaylist(res));
      }
    )
);

export const deletePlaylist = id => dispatch => (
  PlaylistsApiUtil.deletePlaylist(id)
    .then(
      res => {
        dispatch(receivePopup({ message: 'Playlist deleted' }));
        hashHistory.push('/playlists');
      }
    )
);

export const addSongToPlaylist = (playlistSong) => dispatch => (
  PlaylistsApiUtil.addSongToPlaylist(playlistSong)
    .then(
      res => dispatch(receivePopup({ message: 'Song added to playlist' }))
    )
);

export const addFollowerToPlaylist = (playlistFollow) => dispatch => (
  PlaylistsApiUtil.addFollowerToPlaylist(playlistFollow).then (
    res => dispatch(receivePopup({ message: 'Followed Playlist' })),
    err => dispatch(receivePopup({ message: err.responseJSON }))
  )
);

export const removeFollowerFromPlaylist = playlistId => dispatch => (
  PlaylistsApiUtil.removeFollowerFromPlaylist(playlistId)
    .then(
      res => {
        dispatch(receivePopup({ message: 'Unfollowed Playlist' }));
        return dispatch(unfollowPlaylist(playlistId));
      },
      err => dispatch(receivePopup({ message: err.responseJSON }))
    )
);
