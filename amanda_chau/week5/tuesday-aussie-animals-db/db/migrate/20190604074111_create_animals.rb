# in terminal run 'rails db:create' to create db
#'rails generate migration create_animals' to create this # file which creates the columns for my table

class CreateAnimals < ActiveRecord::Migration[5.2]
  def change
    create_table :animals do |t|

      t.string :name
      t.text :image
      t.text :location
      t.text :diet
      t.integer :min_mass
      t.integer :max_mass
      t.integer  :lifespan
      t.boolean :marsupial

    end
  end
end

# then run 'rails db:migrate' this migrates the above into development.sqlite3 and also schema.rb
#'rails db:migrate:status' tells you if the migration has occurred
