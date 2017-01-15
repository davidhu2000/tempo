json.album do
  json.partial! "api/albums/album", album: @album
end

json.songs do
  @album.songs.each do |song|
    json.set! song.id, song
  end
end
