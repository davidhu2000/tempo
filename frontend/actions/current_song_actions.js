export const RECEIVE_SONG = 'RECEIVE_SONG';

import * as CurrentSongApiUtil from '../util/current_song_api_util';

export const receiveSong = song => ({
  type: RECEIVE_SONG,
  song
});

export const fetchSong = id => dispatch => (
  CurrentSongApiUtil.fetchSong(id)
    .then(
      res => dispatch(receiveSong(res))
    )
);
