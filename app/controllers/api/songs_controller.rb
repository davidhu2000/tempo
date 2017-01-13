class Api::SongsController < ApplicationController

  def index
    @songs = Song.all
  end

  def show
    @song = Song.where(id: params[:id]).includes(:album => :artist).first
  end
end
