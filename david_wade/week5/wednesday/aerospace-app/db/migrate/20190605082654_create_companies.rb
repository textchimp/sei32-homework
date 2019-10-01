class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.text :name
      t.text :headquarters
      t.text :traded_as
      t.date :founded
      t.integer :revenue
      t.text :image

      t.timestamps
    end
  end
end
