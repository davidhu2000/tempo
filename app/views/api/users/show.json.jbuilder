json.partial! "api/users/user", user: @user
# json.ownPlaylists do
#   json.partial! 'api/playlists/index.json.jbuilder', playlists: @user.playlists
# end

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
  # json.partial! 'api/playlists/index.json.jbuilder', playlists: @user.followed_playlists
end
