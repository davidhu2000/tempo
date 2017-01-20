require 'csv'

# User Seeds

User.create!(
  username: 'Guest',
  email: 'guest@tempo.com',
  first_name: 'Gu',
  last_name: 'Est',
  password: 'password',
  image_url: Faker::Avatar.image)

20.times do
  first_name, last_name = Faker::Name.first_name, Faker::Name.last_name
  email = "#{first_name}_#{last_name}@#{['gmail', 'yahoo'].sample}.com"
  username = "#{first_name}_#{last_name}"

  User.create!(
    username: username,
    email: email,
    first_name: first_name,
    last_name: last_name,
    password: 'password',
    image_url: Faker::Avatar.image)
end

artists = CSV.read('db/seed/artist-seed.csv')
artists.shift

artists.each do |artist|
  name = artist[0]
  image_url = artist[1]

  Artist.create!(name: name, image_url: image_url)

end

albums = CSV.read('db/seed/album-seed.csv')
albums.shift

albums.each do |album|
  title = album[1]
  artist_name = album[2]
  image_url = album[3]

  artist = Artist.find_by(name: artist_name)

  Album.create!(
    title: title,
    artist_id: artist.id,
    image_url: image_url
  )
end

songs = CSV.read('db/seed/song-seed.csv')
songs.shift

songs.each do |song|
  title = song[1]
  album_id = song[2]
  order = song[3]
  song_url = song[4]

  Song.create!(
    title: title,
    album_id: album_id,
    order: order,
    song_url: song_url
  )
end
