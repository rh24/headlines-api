class StoriesController < ApplicationController
  before_action :set_user, only: [:show, :destroy, :new, :create, :index]

  def new
  end

  def create
    story = Story.new(story_params)
    user = User.find_by(id: params[:user_id].to_i)
    user_story = UserStory.new(story: story, user: user)
    if story.save && user_story.save
      render json: story, status: 200
    else
      render json: { message: user_story.errors }, status: 400
    end
  end

  def show
  end

  def index
    if params[:user_id]
      join_data = UserStory.where(user_id: params[:user_id]).pluck(:story_id)
      stories = Story.where(id: join_data)
      render json: stories, status: 200
    else
      stories = Story.all
      render json: stories, status: 200
    end
  end

  def destroy
    story = Story.find(params[:id])
    story.destroy
    # join_data = UserStory.where(user_id: params[:user_id])
    # join_data.destroy
  end

  private

  def story_params
    params.require(:story).permit(:author, :title, :description, :url, :urlToImage, :publishedAt)
  end

  def destroy_join_data
    join_data = UserStory.where(user_id: params[:user_id], story_id: params[:id])
    join_data.destroy
  end

  def set_user
    @user = User.find_by(id: params[:user_id])
  end
end
