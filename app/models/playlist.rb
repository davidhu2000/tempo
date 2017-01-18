# == Schema Information
#
# Table name: playlists
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  image_url   :string           default("http://res.cloudinary.com/davidhu2000/image/upload/v1484612456/playlist_default_image.png")
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  title       :string           default("Untitled")
#

class Playlist < ActiveRecord::Base
  validates :user_id, null: false

  belongs_to :user

  has_many :playlist_songs

  has_many :songs, through: :playlist_songs

  has_many :playlist_follows

  has_many :followers, through: :playlist_follows, source: :user
end
