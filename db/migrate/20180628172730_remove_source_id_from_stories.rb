class RemoveSourceIdFromStories < ActiveRecord::Migration[5.1]
  def change
    remove_column :stories, :source_id, :integer
  end
end
