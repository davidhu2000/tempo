class Api::ArtistsController < ApplicationController
  def index
    @artists = Artist.all.includes(:albums)
  end

  def show
    @artist = Artist.where(id: params[:id]).includes(:albums).first
  end
end
