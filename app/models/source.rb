class Source < ApplicationRecord
  has_many :stories
  belongs_to :category
  has_many :users, through: :stories

  # def self.news_api_id
  #   self.all.each do |source|
  #     if source.name.include?(".com")
  #       source.news_api_id = null
  #     else
  #       source.news_api_id = source.name.downcase.gsub!(/\s/, '-')
  #       source.save
  #     end
  #   end
  # end

  # Why wasn't the above class method working?

  def get_news_api_id
    if self.name.include?(".com")
      self.news_api_id = null
    else
      self.news_api_id = self.name.downcase.gsub!(/\s/, '-')
      self.save
      news_api_id
    end
  end
end
