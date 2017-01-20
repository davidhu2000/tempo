class AddUniquePairToPlaylistFollow < ActiveRecord::Migration
  def change
    add_index :playlist_follows, [:user_id, :playlist_id], unique: true
  end
end
