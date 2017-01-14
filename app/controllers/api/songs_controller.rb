class Api::SongsController < ApplicationController

  def index
    @songs = Song.all.includes(:album => :artist)
  end

  def show
    @song = Song.where(id: params[:id]).includes(:album => :artist).first
  end
end
