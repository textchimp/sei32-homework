Rails.application.routes.draw do

  get '/getpage' => 'pages#ajax_proxy'

end
