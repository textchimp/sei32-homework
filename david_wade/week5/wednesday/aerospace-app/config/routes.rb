Rails.application.routes.draw do

  #Create
  get

  #READ
  get '/companies/' => 'companies#index'
  get '/companies/:id' => 'companies#show', as: 'company'

  get '/companies/:id/edit' => 'companies#edit', as: 'company_edit'
  patch '/companies/:id' => 'companies#update'


  # get 'companies/edit'
  # get 'companies/update'
  # get 'companies/destroy'
  #


  resources :companies

  # # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
