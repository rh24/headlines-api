class StorySerializer < ActiveModel::Serializer
  attributes :id, :author, :title, :description, :url, :url_to_image, :published_at
  belongs_to :source
end
