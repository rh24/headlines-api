class AddColumnToSources < ActiveRecord::Migration[5.1]
  def change
    add_column :sources, :news_api_id, :string
  end
end
