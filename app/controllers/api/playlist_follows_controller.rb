class Api::PlaylistFollowsController < ApplicationController
  def create
    @playlist_follow = PlaylistSong.new(playlist_follow_params)

    if @playlist_follow.save
      render json: ['Success']
    else
      render json: @playlist_follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @playlist_follow = PlaylistSong.where(playlist_id: params[:id], user_id: params[:user_id])
    @playlist_follow.destroy
    render json: ['Success']
  end

  private

  def playlist_follow_params
    params.require(:playlist_follow).permit(:playlist_id, :user_id)
  end
end
