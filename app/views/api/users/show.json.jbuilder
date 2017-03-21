json.partial! "api/users/user", user: @user

json.ownPlaylists do
  @user.playlists.each do |pl|
    json.set! pl.id do
      json.partial! 'api/playlists/playlist', playlist: pl
    end
  end
end

json.followedPlaylists do
  @user.followed_playlists.each do |pl|
    json.set! pl.id do
      json.partial! 'api/playlists/playlist', playlist: pl
    end
  end
end
