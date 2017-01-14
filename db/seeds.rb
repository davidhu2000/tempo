# User Seeds

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

User.create!(
  username: 'Guest',
  email: 'guest@tempo.com',
  first_name: 'Gu',
  last_name: 'Est',
  password: 'password',
  image_url: Faker::Avatar.image)

# Artist Seeds

Artist.create!(
  name: 'ROZKOL',
  image_url: 'https://freemusicarchive.org/file/images/artists/ROZKOL_-_20160610174533993.png?width=290&height=290'
)

Artist.create!(
  name: 'Unit-29A',
  image_url: 'https://freemusicarchive.org/file/images/artists/Unit-29A_-_20170113131934005.jpg?width=290&height=290'
)

Artist.create!(
  name: 'Broke For Free'
)

Artist.create!(
  name: 'The Long Ryders',
  image_url: 'https://freemusicarchive.org/file/images/albums/The_Long_Ryders_-_Live_at_Monty_Hall_1192016_-_20170113183717933.jpg?width=290&height=290'
)

# Album Seeds

Album.create!(
  title: 'Anthem',
  artist_id: 2,
  image_url: 'https://freemusicarchive.org/file/images/albums/Unit-29A_-_Anthem_-_20170113132111582.jpg?method=crop&width=290&height=290',
)

Album.create!(
  title: 'Directionless EP',
  artist_id: 3,
  image_url: 'https://freemusicarchive.org/file/images/tracks/Track_-_20110118110252018?method=crop&width=290&height=290',
)

Album.create!(
  title: 'Rust Symptoms',
  artist_id: 1,
  image_url: 'https://freemusicarchive.org/file/images/tracks/Track_-_20170113104221023?method=crop&width=290&height=290',
)

Album.create!(
  title: 'Live at Monty Hall',
  artist_id: 4,
  image_url: 'https://freemusicarchive.org/file/images/artists/The_Long_Ryders_-_20170113183039196.png?width=290&height=290'
)

# Song Seeds

Song.create!(
  title: 'S3C',
  album_id: 1,
  order: 1,
  song_url: 'http://res.cloudinary.com/davidhu2000/video/upload/v1484334346/Unit-29A_-_01_-_S3C_lbqbx9.mp3'
)

Song.create!(
  title: 'Night Owl',
  album_id: 2,
  order: 1,
  song_url: 'http://res.cloudinary.com/davidhu2000/video/upload/v1484244565/Broke_For_Free_-_01_-_Night_Owl_ktzlla.mp3'
)

Song.create!(
  title: 'Close Call',
  album_id: 3,
  order: 1,
  song_url: 'http://res.cloudinary.com/davidhu2000/video/upload/v1484334474/ROZKOL_-_01_-_Close_Call_opzv72.mp3'
)

Song.create!(
  title: 'Tell it To the Judge on Sunday',
  album_id: 4,
  order: 2,
  song_url: 'http://res.cloudinary.com/davidhu2000/video/upload/v1484424709/The%20Long%20Ryders/The_Long_Ryders_-_02_-_A_Stitch_In_Time_qbfric.mp3'
)

Song.create!(
  title: 'Gunslinger',
  album_id: 4,
  order: 2,
  song_url: 'http://res.cloudinary.com/davidhu2000/video/upload/v1484424550/The%20Long%20Ryders/The_Long_Ryders_-_03_-_Gunslinger_stksdp.mp3'
)

Song.create!(
  title: 'I Don\'t care what\'s right',
  album_id: 4,
  order: 3,
  song_url: 'http://res.cloudinary.com/davidhu2000/video/upload/v1484424664/The%20Long%20Ryders/The_Long_Ryders_-_04_-_I_Dont_Care_Whats_Right_I_Dont_Care_Whats_Wrong_rsaheh.mp3'
)

Song.create!(
  title: 'Wreck of the 809',
  album_id: 4,
  order: 4,
  song_url: 'http://res.cloudinary.com/davidhu2000/video/upload/v1484424609/The%20Long%20Ryders/The_Long_Ryders_-_05_-_Wreck_of_the_809_uosn4m.mp3'
)

Song.create!(
  title: 'Run Dusty Run',
  album_id: 4,
  order: 5,
  song_url: 'http://res.cloudinary.com/davidhu2000/video/upload/v1484424451/The%20Long%20Ryders/The_Long_Ryders_-_06_-_Run_Dusty_Run_yfkfae.mp3'
)
