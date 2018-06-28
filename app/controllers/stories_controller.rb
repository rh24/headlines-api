class StoriesController < ApplicationController
  # before_action :set_user
  # before_action :set_user, only: [:show, :destroy, :new, :create, :index]

  def new
  end

  def create
    story = Story.new(story_params)
    if story.save
      binding.pry
      user_story = UserStory.create(story: story, user: @user)
      render json: story, status: 200
    else
      render json: { message: story.errors }, status: 400
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

  end

  private

  def story_params
    params.require(:story).permit(:author, :title, :description, :url, :url_to_image, :published_at)
  end

  # def set_user
  #   @user = User.find_by(id: params[:id])
  # end
end
