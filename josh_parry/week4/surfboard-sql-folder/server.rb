require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

#DRY up our routes by creating a reusable DB query function
def db_query( sql )
  db = SQLite3::Database.new 'database.db'
  db.results_as_hash= true
  puts "++++++++++++++++++++++++++++++++++++"
  puts sql  #for debugging
  puts "++++++++++++++++++++++++++++++++++++"
  result = db.execute sql
  db.close
  result
end

##################
    #CREATE
##################

#1. Blank form (new)
get "/surfboards/new" do
  erb :new #template name will always be new
end

# 2. Form submit goes here
post "/surfboards" do

  sql = "INSERT INTO surfboards(name, shaper, description, price, in_stock, image_url)
          VALUES(
            '#{ params[:name] }',
            '#{ params[:shaper] }',
            '#{ params[:description] }',
            '#{ params[:price] }',
            '#{ params[:in_stock] }',
            '#{ params[:image_url] }'

          );"

  db_query sql

  #This form submit route does not have its own template - it redirects
  redirect "/surfboards"
end


##################
    #READ
##################

# 1. Index of All Surfboards
get "/surfboards" do
  @results = db_query 'SELECT * FROM surfboards'

  erb :index
end

#2. Show page details for one surfboard
get "/surfboards/:id" do
  @surfboard = db_query("SELECT * FROM surfboards WHERE id = #{ params[:id] };")
  @surfboard = @surfboard.first
  puts @surfboard


  # db = SQLite3::Database.new 'database.db'
  # db.results_as_hash= true
  #
  # @surfboard = db.execute "SELECT * FROM surfboards WHERE id = #{ params[:id] };"
  # @surfboard = @surfboard.first #We know there will only be one result, so pull it out of the array
  # puts @surfboard

  erb :show
end


##################
    #UPDATE
##################

# 1. Prepopulated form for a specific surfboard by ID
get "/surfboards/:id/edit" do
  result = db_query "SELECT * FROM surfboards WHERE id = #{ params[:id] };"
  @surfboard = result.first
  erb :edit
end

# 2. submit the edit form
post "/surfboards/:id" do

  p params

sql = "UPDATE surfboards SET
            name = '#{ params[:name] }',
            shaper = '#{ params[:shaper] }',
            description = '#{ params[:description] }',
            price = '#{ params[:price] }',
            in_stock = '#{ params[:in_stock] }',
            image_url = '#{ params[:image_url] }'
          WHERE id = #{ params[:id] };"

db_query sql

redirect "/surfboards/#{ params[:id] }" #redirects to the show (details) page for
# this surfboard
end


##################
    #DELETE
##################

#DELETE

get "/surfboards/:id/delete" do
  db_query "DELETE FROM surfboards WHERE id= #{ params[:id] }"
  redirect "/surfboards" #No template to show, redirect to the index
end
