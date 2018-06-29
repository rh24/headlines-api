class UserCategoriesController < ApplicationController
  before_action :set_user

  def create
    # user_category = UserCategory.new(user: )
  end

  def index
    user_categories = UserCategory.all
    render json: user_categories
  end

  def destroy

  end

  private

  def set_user
    @user = User.find_by(id: params[:id])
  end
end
