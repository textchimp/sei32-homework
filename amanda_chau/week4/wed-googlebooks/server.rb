require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

# search form
get "/search" do
  erb :search_form
end

# search form submits here
get "/search/results" do
  URL = "https://www.googleapis.com/books/v1/volumes?q=title:#{ params[ :search_query ] }"

  response = HTTParty.get( URL )


  @results = response['items'] # an array of objects??


  erb :search_results


end
