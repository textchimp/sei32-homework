Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

# planets CRUD system

# Create routes

get "/aussie_animals/new" => "animals#new", as: 'animals_new'

post "/aussie_animals" => "animals#create"



# Read routes
get "/aussie_animals" => "animals#index", as: 'animals'

get "/aussie_animals/:id" => "animals#show", as: 'animal'



# Update routes

get "/aussie_animals/:id/edit" =>  "animals#edit", as: 'animals_edit'

post "/aussie_animals/:id" => "animals#update"


# Delete routes

get "/aussie_animals/:id/delete" => "animals#delete", as: 'animals_delete'


end
