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

export const addSongToPlaylist = playlistSong => (
  $.ajax({
    method: 'POST',
    url: `/api/playlist_songs`,
    data: {
      playlist_song: playlistSong
    }
  })
);

export const addFollowerToPlaylist = playlistId => (
  $.ajax({
    method: 'POST',
    url: `/api/playlist_follows`,
    data: {
      playlist_follow: {
        playlist_id: playlistId
      }
    }
  })
);

export const removeFollowerFromPlaylist = (playlistId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/playlist_follows/`,
    data: {
      playlist_id: playlistId
    }
  })
);
