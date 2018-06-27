class SourceSerializer < ActiveModel::Serializer
  attributes :id, :name, :news_api_id
  belongs_to :category
end
