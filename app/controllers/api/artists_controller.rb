class Api::ArtistsController < ApplicationController
  def index
    @artists = Artist.all.includes(:albums)
  end

  def show
    @artist = Artist.where(id: params[:id]).includes(:albums).first
  end

  def search
    if params[:query].empty?
      @artists = []
    else
      regex = ".*#{params[:query]}.*"
      @artists = Artist.where("name ~* ?", regex).limit(3)
      render :search
    end
  end
end
