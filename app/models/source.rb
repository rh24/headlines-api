class Source < ApplicationRecord
  has_many :stories
  belongs_to :category
  has_many :users, through: :stories
  attr_accessor :news_api_id

  def self.news_api_id
    self.all.each do |source|
      if source.name.include?(".com")
        source.news_api_id = null
      else
        source.news_api_id = source.name.downcase.gsub!(/\s/, '-')
        source.save
      end
    end
  end
end
