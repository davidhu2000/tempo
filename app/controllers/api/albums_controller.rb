class Api::AlbumsController < ApplicationController
  def index
    @albums = Album.all.includes(:songs, :artist)
  end

  def show
    @album = Album.where(id: params[:id]).includes(:songs, :artist).first
  end

end
