class CategoriesSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :stories
  has_many :sources
end
