class Song < ActiveRecord::Base
  validates :title, presence: true
  validates :album_id, presence: true
  validates :track_url, presence: true

  belongs_to :album
end
