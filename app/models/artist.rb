# == Schema Information
#
# Table name: artists
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  image_url  :string           default("http://res.cloudinary.com/davidhu2000/image/upload/c_crop,h_290,w_290,x_85/v1484335512/default_artist_image.jpg"), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Artist < ActiveRecord::Base
  validates :name, presence: true
  validates :image_url, presence: true

  has_many :albums 
end
