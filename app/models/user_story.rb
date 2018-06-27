class UserStory < ApplicationRecord
  has_many :stories
  has_many :users
end
