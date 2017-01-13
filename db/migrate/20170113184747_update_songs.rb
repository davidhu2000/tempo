class UpdateSongs < ActiveRecord::Migration
  def change
    add_column :songs, :track_url, :string, null: false
  end
end
