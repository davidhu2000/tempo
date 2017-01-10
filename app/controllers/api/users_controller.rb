class Api::UsersController < ApplicationController
  before_action :look_up_user, only: [:show, :update, :destroy]

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
    @user.destroy
  end

  private

  def look_up_user
    @user = User.find_by(id: params[:id])
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
