export const fetchAlbum = id => (
  $.ajax({
    method: 'GET',
    url: `api/albums/${id}`
  })
);

export const fetchAllAlbums = () => (
  $.ajax({
    method: 'GET',
    url: `/api/albums`
  })
);
