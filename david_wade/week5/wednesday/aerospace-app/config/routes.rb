Rails.application.routes.draw do

  #READ
  get '/companies/' => 'companies#index'
  get '/companies/:id' => 'companies#show'


  # get 'companies/edit'
  # get 'companies/update'
  # get 'companies/destroy'
  #



  # # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
