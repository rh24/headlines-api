class CreateUserStories < ActiveRecord::Migration[5.1]
  def change
    create_table :user_stories do |t|
      t.integer :story_id
      t.integer :user_id

      t.timestamps
    end
  end
end
