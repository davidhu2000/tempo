export const createPlaylist = playlist => (
  $.ajax({
    method: 'POST',
    url: `/api/playlists`,
    data: { playlist }
  })
);

export const fetchPlaylist = id => (
  $.ajax({
    method: 'GET',
    url: `/api/playlists/${id}`
  })
);

export const updatePlaylist = playlist => (
  $.ajax({
    method: 'PATCH',
    url: `/api/playlists/${playlist.id}`,
    data: { playlist }
  })
);

export const fetchAllPlaylists = filter => {
  let url = `/api/playlists`;

  return $.ajax({
    method: 'GET',
    url: url,
    data: filter
  });
};

export const deletePlaylist = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/playlists/${id}`
  })
);

export const addSongToPlaylist = playlist_song => {
  console.log(playlist_song);

  return $.ajax({
    method: 'POST',
    url: `/api/playlist_songs`,
    data: { playlist_song }
  });
};
