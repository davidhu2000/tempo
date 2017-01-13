@songs.each do |song|
  json.set! song.id do
    json.extract! song, :id, :title, :album_id, :order, :song_url
  end
end
