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
#

class Playlist < ActiveRecord::Base
  validates :user_id, null: false

  has_many :playlist_songs
end
