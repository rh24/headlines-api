class UserStoriesController < ApplicationController

  def new

  end

  def create
    user_story = UserStory.find_or_create_by(user_story_params)
    if user_story.save
      render json: user_story, status: 200
    else
      render json: user_story.errors, status: 400
    end
  end

  def index
    user_stories = UserStory.all
    render json: user_stories, status: 200
  end

  private

  def user_story_params
    params.require(:user_story).permit(:user_id, :story_id)
  end
end
