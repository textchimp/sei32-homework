class AddWebsiteToStartups < ActiveRecord::Migration[5.2]
  def change
    add_column :startups, :website, :text
  end
end
