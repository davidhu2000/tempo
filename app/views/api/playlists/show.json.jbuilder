json.partial! "api/playlists/playlist", playlist: @playlist

json.songs do

  json.array! @playlist.songs.each do |album|
    json.id song.id
    json.title song.title
    json.song_url song.song_url
    json.image_url album.image_url
  end

end
