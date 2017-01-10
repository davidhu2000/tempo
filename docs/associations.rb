class User
  has_many :playlists
end

class Song
  belongs_to :album

  has_many :playlist_songs
  has_many :playlists, through: :playlist_songs
end

class Album
  has_many :songs
  belongs_to :artist
end

class Artist
  has_many :albums

  has_many :songs, through: :albums
end

class Playlist
  has_many :playlist_songs
  has_many :songs, through: :playlist_songs
end

class PlaylistSongs
  belongs_to :playlist
  belongs_to :song
end

class PlaylistFollows
  belongs_to :user
  belongs_to :playlist
end
