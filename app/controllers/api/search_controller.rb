class Api::SearchController < ApplicationController
  def index
    if params[:query].empty?
      @songs = []
      @albums = []
      @artists = []
      @playlists =[]
    else
      regex = ".*#{params[:query]}.*"
      @songs = Song.where("title ~* ?", regex).limit(3)
      @albums = Album.where("title ~* ?", regex).limit(3)
      @artists = Artist.where("name ~* ?", regex).limit(3)
      @playlists = Playlist.where("title ~* ?", regex).limit(3)
    end
  end
end
