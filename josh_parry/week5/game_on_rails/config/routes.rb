Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #############################################

  # ROUTE >> CONTROLLER >> METHOD >> TEMPLATE

  ############################################

  get "/eight" => "eight#form"

  get "/eight/answer" => "eight#answer"

  get "/number" => "number#form"

  get "/number/check" => "number#check"

  get "/rps" => "rps#form"

  get "/rps/throw" => "rps#throw"

end
