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


Artist.create!(
  name: 'Circus Marcus',
  image_url: 'https://freemusicarchive.org/file/images/artists/Circus_Marcus_-_20130705151555292.JPG?width=290&height=290'
)

Album.create!(
  title: 'Vous êtes quelqu\'un de terriblement absent',
  artist_id: 5,
  image_url: 'https://freemusicarchive.org/file/images/albums/Circus_Marcus_-_Vous_tes_quelquun_de_terriblement_absent_-_20151101171113082.jpg?width=290&height=290'
)

Song.create!(
  title: 'La première page',
  album_id: 5,
  order: 1,
  song_url: 'http://res.cloudinary.com/davidhu2000/video/upload/v1484604989/circus_marcus/vous_ets_quelqun_de_terriblement_absent/Circus_Marcus_-_01_-_La_premire_page.mp3'
)

Song.create!(
  title: 'Le réveil',
  album_id: 5,
  order: 2,
  song_url: 'http://res.cloudinary.com/davidhu2000/video/upload/v1484605025/circus_marcus/vous_ets_quelqun_de_terriblement_absent/Circus_Marcus_-_02_-_Le_rveil.mp3'
)

Song.create!(
  title: 'La tapa del sábado',
  album_id: 5,
  order: 3,
  song_url: 'http://res.cloudinary.com/davidhu2000/video/upload/v1484605020/circus_marcus/vous_ets_quelqun_de_terriblement_absent/Circus_Marcus_-_03_-_La_tapa_del_sbado.mp3'
)

Song.create!(
  title: 'Un triste soir d\'été en bord de lac ',
  album_id: 5,
  order: 4,
  song_url: 'http://res.cloudinary.com/davidhu2000/video/upload/v1484605029/circus_marcus/vous_ets_quelqun_de_terriblement_absent/Circus_Marcus_-_04_-_Un_triste_soir_dt_en_bord_de_lac.mp3'
)

Song.create!(
  title: 'La tragédie de la femme a poils',
  album_id: 5,
  order: 5,
  song_url: 'http://res.cloudinary.com/davidhu2000/video/upload/v1484605026/circus_marcus/vous_ets_quelqun_de_terriblement_absent/Circus_Marcus_-_05_-_La_tragdie_de_la_femme_a_poils.mp3'
)

Album.create!(
  title: 'Aux puces',
  artist_id: 5,
  image_url: 'https://freemusicarchive.org/file/images/albums/Circus_Marcus_-_Aux_puces_-_2012031165048550.jpg?width=290&height=290'
)

Song.create!(
  title: 'Aux puces No 1 - Les chaises Louis XVI',
  album_id: 6,
  order: 1,
  song_url: 'http://res.cloudinary.com/davidhu2000/video/upload/v1484604840/circus_marcus/aux_puces/Circus_Marcus_-_01_-_Aux_puces_No_1_-_Les_chaises_Louis_XVI.mp3'
)

Song.create!(
  title: 'Aux puces No 2 - Carosello',
  album_id: 6,
  order: 2,
  song_url: 'http://res.cloudinary.com/davidhu2000/video/upload/v1484604874/circus_marcus/aux_puces/Circus_Marcus_-_02_-_Aux_puces_No_2_-_Carosello.mp3'
)

Song.create!(
  title: 'Aux puces No 4 - Noctambule',
  album_id: 6,
  order: 3,
  song_url: 'http://res.cloudinary.com/davidhu2000/video/upload/v1484604922/circus_marcus/aux_puces/Circus_Marcus_-_04_-_Aux_puces_No_4_-_Noctambule.mp3'
)

Song.create!(
  title: 'Aux puces No 5',
  album_id: 6,
  order: 4,
  song_url: 'http://res.cloudinary.com/davidhu2000/video/upload/v1484604868/circus_marcus/aux_puces/Circus_Marcus_-_05_-_Aux_puces_No_5.mp3'
)

Album.create!(
  title: 'Petrified',
  artist_id: 5,
  image_url: 'https://freemusicarchive.org/file/images/albums/Circus_Marcus_-_Petrified_-_20160509124532319.jpg?width=290&height=290'
)

Song.create!(
  title: 'Phoenix',
  album_id: 7,
  order: 1,
  song_url: 'http://res.cloudinary.com/davidhu2000/video/upload/v1484604728/circus_marcus/petrified/Circus_Marcus_-_01_-_Phoenix.mp3'
)

Song.create!(
  title: 'Petrified',
  album_id: 7,
  order: 2,
  song_url: 'http://res.cloudinary.com/davidhu2000/video/upload/v1484604681/circus_marcus/petrified/Circus_Marcus_-_02_-_Petrified.mp3'
)

Song.create!(
  title: 'Runaway',
  album_id: 7,
  order: 3,
  song_url: 'http://res.cloudinary.com/davidhu2000/video/upload/v1484604686/circus_marcus/petrified/Circus_Marcus_-_03_-_Runaway.mp3'
)

Song.create!(
  title: 'La brise',
  album_id: 7,
  order: 4,
  song_url: 'http://res.cloudinary.com/davidhu2000/video/upload/v1484604742/circus_marcus/petrified/Circus_Marcus_-_04_-_La_brise.mp3'
)
