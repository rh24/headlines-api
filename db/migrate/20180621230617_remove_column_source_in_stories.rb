class RemoveColumnSourceInStories < ActiveRecord::Migration[5.1]
  def change
    remove_column :stories, :source, :string
  end
end
