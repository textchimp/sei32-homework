
# Books I
# Specification
# Build a search form that lets the user enter a book title. The Sinatra app will use HTTParty to fetch the data for the chosen book from Google Books and display it on the page. Display the cover, as a bare minimum.
#
# Sample URL
# https://www.googleapis.com/books/v1/volumes?q=title:Ulysses
#
# Additional Resources
# Dynamic URLs in Sinatra
# Google Books Search API
# HTTParty Tutorial
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

#search form
get "/search" do
  erb :search_form
end

#search form submits here`
get "/search/results" do
  API_KEY = 'AIzaSyCwaq1WSIM0W8AY7GxcOGgT8-l1790QwDc'
  BASE_URL = 'https://www.googleapis.com/books/v1'
  URL = "#{BASE_URL}/search/books?api_key=#{ API_KEY }&query=#{params[:search_query] }"


  puts URL
  response = HTTParty.get( URL )

  @results = response['results'] #this is the array of book results

  erb :search_results
end
