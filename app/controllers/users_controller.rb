class UserController < ApplicationController

  def new
  end

  def create
    user = User.create(user_params)
    if user.save
      render json: user, status: 200
    end
  end

  def show
  end

  def index
    users = User.all
    render json: users
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
