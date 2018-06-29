class AddColumnToSources < ActiveRecord::Migration[5.1]
  def change
    add_column :sources, :newsApiId, :string
  end
end
