class StorySerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :source
end
