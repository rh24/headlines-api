class SourceSerializer < ActiveModel::Serializer
  attributes :id, :name, :newsApiId
  belongs_to :category
end
