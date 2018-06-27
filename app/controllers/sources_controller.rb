class SourcesController < ApplicationController

  def index
    sources = Source.all
    render json: sources, status: 200
  end
end
