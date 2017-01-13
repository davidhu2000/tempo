json.extract! song, :id, :title, :album_id, :order, :song_url, :lyrics
json.set! :image_url, song.album.image_url
json.set! :artist_id, song.album.artist.id
