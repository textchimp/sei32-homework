Rails.application.routes.draw do


#CREATE
  get '/cities/new' => 'cities#new'

  post '/cities' => 'cities#create'

#READ
  get '/cities' => 'cities#index'

  get '/cities/:id' => 'cities#show', as:'city'

#UPDATE

  get '/cities/:id/edit' => 'cities#edit', as:'city_edit'

  patch '/cities/:id'  => 'cities#update'



#DELETE
  delete '/cities/:id/delete' => 'cities#destroy', as:'city_delete'


  resources :startups

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
