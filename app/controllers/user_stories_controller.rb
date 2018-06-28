class UserStoriesController < ApplicationController

  def new

  end

  def create
    
  end

  def index
    user_stories = UserStory.all
    render json: user_stories, status: 200
  end
end
