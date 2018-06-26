class Source < ApplicationRecord
  has_many :stories
  belongs_to :category
  has_many :users, through: :stories
end
