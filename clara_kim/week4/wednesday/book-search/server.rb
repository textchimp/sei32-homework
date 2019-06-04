require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


# search form
get "/book/search" do
  erb :book_search
end

# search form submits here
get "/book/results" do

  BASE_URL = "https://www.googleapis.com/books"
  URL = "#{BASE_URL}/v1/volumes?q=#{params[:title]}"


  response = HTTParty.get( URL )  # actually make the request to the API

  @results = response['results']  # this is the array of movie results

  erb :book_results
end
