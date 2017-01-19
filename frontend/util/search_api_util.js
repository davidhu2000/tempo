export const fetchSearchSongs = query => (
  $.ajax({
    method: "GET",
    url: `/api/songs/search`,
    data: { query }
  })
);

// export const fetchSearchAlbums = query => (
//   // your code here;
// );
//
// export const fetchSearchPlaylists = query => (
//   // your code here;
// );
//
// export const clearSearch = () => (
//   // your code here;
// );
