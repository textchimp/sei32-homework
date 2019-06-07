class AddCityIdToStartups < ActiveRecord::Migration[5.2]
  def change
    add_column :startups, :city_id, :integer
  end
end
