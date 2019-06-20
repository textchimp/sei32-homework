class CreateCities < ActiveRecord::Migration[5.2]
  def change
    create_table :cities do |t|
      t.text :name
      t.integer :population
      t.integer :num_startups
      t.float :avg_val
      t.text :image

      t.timestamps
    end
  end
end
