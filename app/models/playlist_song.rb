# == Schema Information
#
# Table name: playlist_songs
#
#  id          :integer          not null, primary key
#  song_id     :integer          not null
#  playlist_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class PlaylistSong < ActiveRecord::Base
  validates :song_id, null: false
  validates :playlist_id, null: false

  belongs_to :playlist
  belongs_to :song
end
