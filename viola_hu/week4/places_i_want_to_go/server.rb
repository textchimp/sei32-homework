require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

def db_query(sql)
  db= SQLite3::Database.new 'database.db'
  db.results_as_hash = true
  result = db.execute sql
  db.close
  result
end



# CREATE routes:

#1, blank form (new)
get "/places/new" do
  erb :new
end

#2, new form submits here
post "/places" do
  sql = "INSERT INTO places(place, country, visited, visit_time, image_url)
    VALUES(
      '#{params[:place]}',
      '#{params[:country]}',
      '#{params[:visited]}',
      '#{params[:visit_time]}',
      '#{params[:image_url]}'
    );"

  db_query sql

  redirect "/places"

end



# READ routes:

#1, index of all places that I want to go
get "/places" do
  @places = db_query 'SELECT * FROM places;' #big array with each place's hash

  erb :index
end

#2, show page, details for each place

get "/places/:id" do

  result = db_query "SELECT * FROM places WHERE id = #{params[:id]};" #return a big array including one hash whose id matches the id.

  @oneplace = result.first # one hash of one place

  erb :show
end




#UPDATE routes:

#1, pre-populated form for a specific place by ## ID

get "/places/:id/edit" do
  result = db_query "SELECT * FROM places WHERE id = #{params[:id]};" #return a big array including one hash whose id matches the id.

  @oneplace = result.first # one hash of one place

  erb :edit
end

# submit the updated form

post "/places/:id" do

  sql = "UPDATE places SET
    place        = '#{params[:place]}',
    country      = '#{params[:country]}',
    visited      = '#{params[:visited]}',
    visit_time   = '#{params[:visit_time]}',
    image_url    = '#{params[:image_url]}'
  WHERE id = #{params[:id]};"

  db_query sql

  redirect "/places/#{params[:id]}"
end


#DELETE route
get "/places/:id/delete" do
  db_query "DELETE FROM places WHERE id = #{params[:id]}"

  redirect "/places"
end
