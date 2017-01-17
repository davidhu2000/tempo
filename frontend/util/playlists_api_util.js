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

export const fetchAllPlaylists = filter => {
  let url = `/api/playlists`;
  if(filter.ownerId) {
    url += `?owner_id=${filter.ownerId}`;
  } else if(filter.followerId) {

  }
  console.log(url);
  return $.ajax({
    method: 'GET',
    url: url
  });
};

export const deletePlaylist = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/playlists/${id}`
  })
);
