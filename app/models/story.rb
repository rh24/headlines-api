class Story < ApplicationRecord
  # belongs_to :source
  has_many :user_stories
  has_many :users, through: :user_stories

  validates :title, uniqueness: true
end
