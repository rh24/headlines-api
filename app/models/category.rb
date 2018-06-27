class Category < ApplicationRecord
  has_many :stories
  has_many :user_categories
  has_many :categories, through: :user_categories
end
