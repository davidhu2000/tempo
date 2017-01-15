import * as ArtistsApiUtil from '../util/artists_api_util';

export const RECEIVE_ALL_ARTISTS = 'RECEIVE_ALL_ARTISTS';
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';

export const receiveAllArtists = artists => ({
  type: RECEIVE_ALL_ARTISTS,
  artists
});

export const receiveArtist = artist => ({
  type: RECEIVE_ARTIST,
  artist
});

export const fetchAllArtists = () => dispatch => (
  ArtistsApiUtil.fetchAllArtists()
    .then(
      res => dispatch(receiveAllArtists(res))
    )
);

export const fetchArtist = id => dispatch => (
  ArtistsApiUtil.fetchArtist(id)
    .then(
      res => dispatch(receiveArtist(res))
    )
);
