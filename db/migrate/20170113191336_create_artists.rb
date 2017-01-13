class CreateArtists < ActiveRecord::Migration
  def change
    create_table :artists do |t|
      t.string :name, null: false
      t.string :image_url, null: false, default: 'http://res.cloudinary.com/davidhu2000/image/upload/c_crop,h_290,w_290,x_85/v1484335512/default_artist_image.jpg'
      t.timestamps null: false
    end
  end
end
