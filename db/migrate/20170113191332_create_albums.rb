class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.string :title, null: false
      t.integer :artist_id, null: false
      t.string :image_url, null: false, default: 'http://res.cloudinary.com/davidhu2000/image/upload/c_scale,w_500/v1484334953/album_default_image.jpg'
      t.text :description
      t.timestamps null: false
    end
  end
end
