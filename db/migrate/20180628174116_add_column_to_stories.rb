class AddColumnToStories < ActiveRecord::Migration[5.1]
  def change
    add_column :stories, :source, :string
  end
end
