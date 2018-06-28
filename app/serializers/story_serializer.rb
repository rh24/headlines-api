class StorySerializer < ActiveModel::Serializer
  attributes :id, :author, :title, :description, :url, :url_to_image, :published_at

  # I took the below out for now because I'd need to find a way to post to /sources each time a new story is created. I've decided to go with having the source as a string instead.
  # , :source
  # belongs_to :source
  # belongs_to only shows when routing to /stories, NOT users/1
end
