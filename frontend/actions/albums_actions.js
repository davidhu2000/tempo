import * as AlbumsApiUtil from '../util/albums_api_util';

export const RECEIVE_ALL_ALBUMS = 'RECEIVE_ALL_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';

export const receiveAllAlbums = albums => ({
  type: RECEIVE_ALL_ALBUMS,
  albums
});

export const receiveAlbum = album => ({
  type: RECEIVE_ALBUM,
  album
});

export const fetchAllAlbums = () => dispatch => (
  AlbumsApiUtil.fetchAllAlbums()
    .then(
      res => dispatch(receiveAllAlbums(res))
    )
);

export const fetchAlbum = id => dispatch => (
  AlbumsApiUtil.fetchAlbum(id)
    .then(
      res => {
        return dispatch(receiveAlbum(res));
      }
    )
);
