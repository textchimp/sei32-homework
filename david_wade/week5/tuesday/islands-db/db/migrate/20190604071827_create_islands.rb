class CreateIslands < ActiveRecord::Migration[5.2]
  def change
    create_table :islands do |t|
      t.string :name
      t.string :demonym
      t.string :capital
      t.string :currency
      t.float :area
      t.string :image
    end
  end
end
