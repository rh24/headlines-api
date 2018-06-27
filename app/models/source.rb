class Source < ApplicationRecord
  has_many :stories
  belongs_to :category
  has_many :users, through: :stories

  def news_api_id
    if self.name.include?(".com")
      self.news_api_id = null
    else
      self.news_api_id = self.name.downcase.gsub!(/\s/, '-')
    end
  end
end
