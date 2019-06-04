Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  get "/games" => "pages#home"

  get "/games/magic" => "pages#magic"

  get "/games/magic/play" => "magic#play"

  get "/games/secret_number" => "pages#secret"

  get "/games/secret_number/:id" => "secret#play"

  get "/games/rock_paper_scissors" => "pages#rps"

  get "/games/rock_paper_scissors/:throw" => "rps#play"

end
