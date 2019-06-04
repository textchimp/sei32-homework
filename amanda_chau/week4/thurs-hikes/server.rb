require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

def db_query( sql )
  db = SQLite3::Database.new 'database.db'

  db.results_as_hash = true

  puts "------------------------------"
  puts sql
  puts "------------------------------"

  result = db.execute sql
  db.close
  result

end


#CREATE routes

get "/hikes/new" do
  erb :new
end


post "/hikes" do
  # p params
  sql = "INSERT INTO hikes( trail, country, description, difficulty, duration, distance, overnight, image_url)
    VALUES(

      '#{ params[:trail]}',
      '#{ params[:country]}',
      '#{ params[:description]}',
      '#{ params[:difficulty]}',
      '#{ params[:duration]}',
      '#{ params[:distance]}',
      '#{ params[:overnight]}',
      '#{ params[:image_url]}'
    );"

  db_query sql

  redirect "/hikes"

end
# why no " " here compared erb file, see above
# is params just for the server

# Read routes

# 1. Index of all hikes

# this is a route 
get "/hikes" do
  @results = db_query 'SELECT * FROM hikes;'

  # p @results
  # an array of hashes

  erb :index
end

get "/hikes/:id" do
  @hike = db_query "SELECT * FROM hikes WHERE id = #{ params[:id] }"
  # p @hike
  # an array of 1 hash
  @hike = @hike.first
  # now just a hash

  p @hike


  erb :show

end

# UPDATE

get "/hikes/:id/edit" do
  @result = db_query "SELECT * FROM hikes WHERE id = #{ params[:id]}"
  @hike = @result.first
  erb :edit
end


post "/hikes/:id" do
  p params

  sql = "UPDATE hikes SET
    trail =          '#{ params[:trail] }',
    country =        '#{ params[:country] }',
    description =    '#{ params[:description] }',
    difficulty =     '#{ params[:difficulty] }',
    duration =       '#{ params[:duration] }',
    distance =       '#{ params[:distance] }',
    overnight =      '#{ params[:overnight] }',
    image_url =      '#{ params[:image_url] }'
    WHERE id = #{ params[:id] };"


    db_query sql

  redirect "/hikes/#{ params[:id] }"
end

# DELETE route

get "/hikes/:id/delete" do
  db_query "DELETE FROM hikes where id = #{ params[:id] }"

  redirect "/hikes"
end
