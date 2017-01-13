# == Schema Information
#
# Table name: albums
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  artist_id   :integer          not null
#  image_url   :string           default("http://res.cloudinary.com/davidhu2000/image/upload/c_scale,w_500/v1484334953/album_default_image.jpg"), not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Album < ActiveRecord::Base
  validates :title, presence: true
  validates :artist_id, presence: true
  validates :image_url, presence: true

  belongs_to :artist

  has_many :songs
end
