class CreateStartups < ActiveRecord::Migration[5.2]
  def change
    create_table :startups do |t|
      t.text :name
      t.text :founder
      t.text :categories
      t.text :logo
      t.boolean :hiring_devs

      t.timestamps
    end
  end
end
