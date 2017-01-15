export const fetchAllArtists = () => (
  $.ajax({
    method: 'GET',
    url: `/api/artists`
  })
);

export const fetchArtist = id => (
  $.ajax({
    method: 'GET',
    url: `/api/artists/${id}`
  })
);
