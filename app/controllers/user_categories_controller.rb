class UserCategoriesController < ApplicationController
  before_action :set_user

  def create
    user_category = UserCategory.new(user_category_params)
    if user_category.save
      render json: user_category, status: 200
    else
      render json: user_category.errors, status: 400
    end
  end

  def index
    user_categories = UserCategory.all
    render json: user_categories
  end

  def destroy

  end

  private

  def user_category_params
    params.require(:user_category).permit(:user_id, :category_id)
  end

  def set_user
    @user = User.find_by(id: params[:id])
  end
end
