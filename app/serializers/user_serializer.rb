class UserSerializer < AcitveModel::Serializer
  attributes :id, :username
  has_many :stories
  has_many :categories
end
