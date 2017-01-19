class Api::PlaylistFollowsController < ApplicationController
  def create
    @playlist_follow = PlaylistFollow.new(playlist_follow_params)
    @playlist_follow.user_id = current_user.id

    # add functionality to prevent user from following their own playlists
    if @playlist_follow.save
      render json: ['Success']
    else
      render json: @playlist_follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @playlist_follow = PlaylistFollow.where(playlist_id: params[:playlist_id], user_id: current_user.id).first
    @playlist_follow.destroy
    render json: ['Success']
  end

  private

  def playlist_follow_params
    params.require(:playlist_follow).permit(:playlist_id, :user_id)
  end
end
