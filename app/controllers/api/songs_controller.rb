class Api::SongsController < ApplicationController

  def index
    @songs = Song.all.includes(:album => :artist)
    @songs = @songs.limit(params[:limit]) unless params[:limit] == '-1'
  end

  def show
    @song = Song.where(id: params[:id]).includes(:album => :artist).first
  end

  def search
    if params[:query].empty?
      @songs = []
    else
      regex = ".*#{params[:query]}.*"
      @songs = Song.where("title ~* ?", regex).limit(3)
      render :search
    end
  end
end
