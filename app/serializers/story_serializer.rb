class StorySerializer < ActiveModel::Serializer
  attributes :id, :author, :title, :description, :url, :url_to_image, :published_at, :source
  belongs_to :source
  # belongs_to only shows when routing to /stories, NOT users/1
end
