class Api::UsersController < ApplicationController
  before_action :look_up_user, only: [:show, :update, :destroy]
  before_action :require_logged_in, only: [:update, :destroy]
  before_action :cannot_modify_other_users, only: [:update, :destroy]

  def show
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    if @user.update(user_params)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def destroy
    if @user
      @user.destroy
      render 'api/users/show'
    else
      render json: ['User does not exist'], status: 401
    end
  end

  private

  def look_up_user
    @user = User.where(id: params[:id]).includes(:playlists).first
  end

  def cannot_modify_other_users
    unless current_user === @user
      render json: ['Cannot modify other usees'], status: 401
    end
  end

  def user_params
    params.require(:user).permit(:username,
                                 :password,
                                 :email,
                                 :first_name,
                                 :last_name,
                                 :image_url)
  end
end
