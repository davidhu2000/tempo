# == Schema Information
#
# Table name: songs
#
#  id         :integer          not null, primary key
#  title      :string           default("Untitled"), not null
#  album_id   :integer          not null
#  order      :integer
#  lyrics     :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  song_url   :string           not null
#

class Song < ActiveRecord::Base
  validates :title, presence: true
  validates :album_id, presence: true
  validates :song_url, presence: true

  belongs_to :album

  has_many :playlist_songs
end
