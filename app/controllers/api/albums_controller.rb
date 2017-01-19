class Api::AlbumsController < ApplicationController
  def index
    @albums = Album.all.includes(:songs, :artist)
  end

  def show
    @album = Album.where(id: params[:id]).includes(:songs, :artist).first
  end

  def search
    if params[:query].empty?
      @albums = []
    else
      regex = ".*#{params[:query]}.*"
      @albums = Album.where("title ~* ?", regex).limit(3)
      render :search
    end
  end

end
