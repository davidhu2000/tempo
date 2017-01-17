class AddTitleToPlaylists < ActiveRecord::Migration
  def change
    add_column :playlists, :title, :string, default: 'Untitled'
  end
end
