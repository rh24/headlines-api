class StoriesController < ApplicationController
  # before_action :set_user
  before_action :set_user, only: [:show, :destroy, :new, :create]

  def new
  end

  def create
    story = Story.new(story_params)
    if story.save
      render json: story, status: 200
    else
      render json: { message: story.errors }, status: 400
    end
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

  def story_params
    params.require(:story).permit(:author, :title, :description, :url, :url_to_image, :published_at)
  end

  def set_user
    @user = User.find_by(id: params[:id])
  end
end
