class Api::PlaylistsController < ApplicationController
  before_action :get_playlist, only: [:update, :show, :destroy]
  before_action :require_user_to_be_author, only: [:update]

  def index
    if params[:ownerId]
      @playlists = Playlist.where(user_id: params[:ownerId])
    elsif params[:user_id]

    else
      @playlists = Playlist.all
    end

    @playlists ||= []
  end

  def create
    @playlist = Playlist.new(playlist_params)
    @playlist.user_id = current_user.id
    if @playlist.save
      render 'api/playlists/show'
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def update
    if @playlist.update(playlist_params)
      render 'api/playlists/show'
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def show
  end

  def destroy
    if @playlist
      @playlist.destroy
      render 'api/playlists/show'
    else
      render json: ['Playlist does not exist'], status: 404
    end
  end

  private

  def get_playlist
    @playlist = Playlist.where(id: params[:id]).includes(:songs).first
  end

  def playlist_params
    params.require(:playlist).permit(:title, :description)
  end

  def require_user_to_be_author
    unless current_user.id == @playlist.user_id
      render json: ['Cannot edit playlist unless you are the author'], status: 401
    end
  end
end
