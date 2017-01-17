class CreatePlaylists < ActiveRecord::Migration
  def change
    create_table :playlists do |t|
      t.integer :user_id, null: false
      t.string :image_url, default: 'http://res.cloudinary.com/davidhu2000/image/upload/v1484612456/playlist_default_image.png'
      t.text :description

      t.timestamps null: false
    end
  end
end
