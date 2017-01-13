class ChangeColumnOfSongs < ActiveRecord::Migration
  def change
    rename_column :songs, :track_url, :song_url
  end
end
