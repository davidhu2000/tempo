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
  validates :song_id, presence: true
  validates :playlist_id, presence: true

  belongs_to :playlist
  belongs_to :song
end
