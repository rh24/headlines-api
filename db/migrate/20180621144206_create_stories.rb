class CreateStories < ActiveRecord::Migration[5.1]
  def change
    create_table :stories do |t|
      t.string :source
      t.string :author
      t.string :title
      t.text :description
      t.string :url
      t.string :urlToImage
      t.string :publishedAt

      t.timestamps null: false
    end
  end
end
