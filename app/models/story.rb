class Story < ApplicationRecord
  belongs_to :source
  has_many :users
end
