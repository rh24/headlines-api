class CategoriesController < ApplicationController
  before_action :set_user, only: [:create, :destroy]

  def new

  end

  def create
    
  end

  def index
    categories = Category.all
    render json: categories, status: 200
  end

  def destroy

  end

  private

  def set_user
    @user = User.find_by(id: params[:id])
  end
end
