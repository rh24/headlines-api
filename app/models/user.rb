class User < ApplicationRecord
  has_many :user_stories
  has_many :stories, through: :user_stories
  has_many :user_categories
  has_many :categories, through: :user_categories
end
