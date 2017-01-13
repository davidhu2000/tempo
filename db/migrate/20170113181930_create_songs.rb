class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :title, null: false, default: 'Untitled'
      t.integer :album_id, null: false
      t.integer :order
      t.text :lyrics
      t.timestamps null: false
    end
  end
end
