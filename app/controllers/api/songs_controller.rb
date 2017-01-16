class Api::SongsController < ApplicationController

  def index
    @songs = Song.all.includes(:album => :artist)
    @songs = @songs.limit(params[:limit]) unless params[:limit] == '-1'
  end

  def show
    @song = Song.where(id: params[:id]).includes(:album => :artist).first
  end
end
