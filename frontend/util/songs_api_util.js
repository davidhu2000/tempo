export const fetchSong = id => (
  $.ajax({
    method: 'GET',
    url: `/api/songs/${id}`
  })
);

export const fetchAllSongs = (limit) => (
  $.ajax({
    method: 'GET',
    url: `/api/songs?limit=${limit}`,
  })
);
