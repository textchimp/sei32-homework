Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

#Read Routes
get '/islands' => 'islands#index'
get '/islands/:id' => 'islands#show', as: 'island'

#Update Routes
get '/islands/:id/edit' => 'islands#edit', as: 'island_edit'
post '/islands/:id' => 'islands#update'



end
