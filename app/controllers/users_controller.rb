class UsersController < ApplicationController

  def new
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: user, status: 200
    else
      render json: { message: user.errors }, status: 400
    end
  end

  def show
    user = User.where(id: params[:id])
    render json: user, status: 200
  end

  def index
    users = User.all
    render json: users, status: 200
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def user_params
    params.require(:user).permit(:username)
  end
end
