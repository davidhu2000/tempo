json.partial! "api/artists/artist", artist: @artist
json.albums do

  json.array! @artist.albums.each do |album|
    json.id album.id
    json.image_url album.image_url
    json.title album.title

    json.songs do
      json.array! album.songs.each do |song|
        json.id song.id
        json.title song.title
        json.song_url song.song_url
        json.image_url album.image_url
      end
    end

  end

end
