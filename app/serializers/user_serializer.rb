class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :stories
  # has_many :categories
end
