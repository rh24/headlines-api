class AddCategoryIdToSources < ActiveRecord::Migration[5.1]
  def change
    add_column :sources, :category_id, :integer
  end
end
