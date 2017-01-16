import * as SongsApiUtil from '../util/songs_api_util';

export const RECEIVE_SONG = 'RECEIVE_SONG';
export const RECEIVE_ALL_SONGS = 'RECEIVE_ALL_SONGS';

export const receiveSong = song => ({
  type: RECEIVE_SONG,
  song
});

export const receiveAllSongs = songs => ({
  type: RECEIVE_ALL_SONGS,
  songs
});


export const fetchSong = id => dispatch => (
  SongsApiUtil.fetchSong(id)
    .then(
      res => dispatch(receiveSong(res))
    )
);

export const fetchAllSongs = () => dispatch => (
  SongsApiUtil.fetchAllSongs()
    .then(
      res => dispatch(receiveAllSongs(res))
    )
);

// actions for the current song being played
export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';
export const CLEAR_CURRENT_SONG = 'CLEAR_CURRENT_SONG';

export const receiveCurrentSong = currentSong => ({
  type: RECEIVE_CURRENT_SONG,
  currentSong
});

export const clearCurrentSong = () => ({
  type: CLEAR_CURRENT_SONG
});

export const fetchCurrentSong = id => dispatch => (
  SongsApiUtil.fetchSong(id)
    .then(
      res => dispatch(receiveCurrentSong(res))
    )
);
