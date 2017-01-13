export const fetchSong = id => (
  $.ajax({
    method: 'GET',
    url: `/api/songs/${id}`
  })
);

export const fetchAllSongs = () => (
  $.ajax({
    method: 'GET',
    url: `/api/songs`
  })
);
