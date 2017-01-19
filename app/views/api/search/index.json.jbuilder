json.songs do
  @songs.each do |song|
    json.set! song.id do
      json.extract! song, :id, :title, :album_id
    end
  end
end

json.albums do
  @albums.each do |album|
    json.set! album.id do
      json.extract! album, :id, :title
    end
  end
end

json.artists do
  @artists.each do |artist|
    json.set! artist.id do
      json.extract! artist, :id, :name
    end
  end
end

json.playlists do
  @playlists.each do |playlist|
    json.set! playlist.id do
      json.extract! playlist, :id, :title
    end
  end
end
