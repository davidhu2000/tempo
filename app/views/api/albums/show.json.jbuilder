json.partial! "api/albums/album", album: @album
json.songs do
  @album.songs.each do |song|
    json.set! song.id do
      json.id song.id
      json.title song.title
      json.song_url song.song_url
      json.image_url @album.image_url
    end
  end
end
