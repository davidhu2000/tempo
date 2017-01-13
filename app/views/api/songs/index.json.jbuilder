@songs.each do |song|
  json.set! song.id do
    json.partial! "api/users/song", song: song
  end
end
