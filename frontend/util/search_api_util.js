export const fetchSearchSongs = query => (
  $.ajax({
    method: "GET",
    url: `/api/songs/search`,
    data: { query }
  })
);

export const fetchSearchAlbums = query => (
  $.ajax({
    method: "GET",
    url: `/api/albums/search`,
    data: { query }
  })
);

export const fetchSearchPlaylists = query => (
  $.ajax({
    method: "GET",
    url: `/api/playlists/search`,
    data: { query }
  })
);

export const fetchSearchArtists = query => (
  $.ajax({
    method: "GET",
    url: `/api/artists/search`,
    data: { query }
  })
);
