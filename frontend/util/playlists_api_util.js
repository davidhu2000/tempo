export const createPlaylist = playlist => (
  $.ajax({
    method: 'POST',
    url: `/api/playlists/`,
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
    method: 'GET',
    url: `/api/playlists/${playlist.id}`,
    data: { playlist }
  })
);

export const fetchAllPlaylists = () => (
  $.ajax({
    method: 'GET',
    url: `/api/playlists/`
  })
);

export const deletePlaylist = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/playlists/${id}`
  })
);
