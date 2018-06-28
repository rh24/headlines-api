class StoriesController < ApplicationController
  # before_action :set_user
  before_action :set_story, only: [:show, :destroy]

  def create

  end

  def show

  end

  def index
    stories = Story.all
    render json: stories, status: 200
  end

  def destroy

  end

  private

  def stories_params
    params.require(:story).permit(:author, :title, :description, :url, :url_to_image, :published_at)
  end

  def set_user
    @user = User.find_by(id: params[:id])
  end
end
