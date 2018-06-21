class AddSourceIdToStories < ActiveRecord::Migration[5.1]
  def change
    add_column :stories, :source_id, :integer
  end
end
