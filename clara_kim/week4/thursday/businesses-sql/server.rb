require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

# DRY up our routes by creating a reusable DB query function
def db_query( sql )
  db = SQLite3::Database.new 'database.db'
  db.results_as_hash = true
  puts '==============================='
  puts sql   # for debugging our SQL
  puts '==============================='
  result = db.execute sql
  db.close
  result  # return the result of the query
end

# CREATE routes:

# 1. Blank form (new)
get "/businesses/new" do
  erb :new
end

# 2. New form submits here
post "/businesses" do #despite same URL, different routes, not automatically a connection
  # p params
  # "Form submitted."
  db = SQLite3::Database.new 'database.db'
  db.results_as_hash = true

  sql = "INSERT INTO businesses ( business_name, has_website, suburb, postcode, street_address, business_type, owner, landline_number, mobile_number, email, storefront_image_url, date_added )
          VALUES(
            '#{params[:business_name]}',
            '#{params[:has_website]}',
            '#{params[:suburb]}',
            '#{params[:postcode]}',
            '#{params[:street_address]}',
            '#{params[:business_type]}',
            '#{params[:owner]}'
            '#{params[:landline_number]}'
            '#{params[:mobile_number]}'
            '#{params[:email]}'
            '#{params[:storefront_image_url]}'
            '#{params[:date_added]}'
          );"

  db_query sql

  # don't use erb - Form submit routes don't have their own templates -
  # it redirects to another route - in this case the businesses index
  redirect "/businesses"
end
# pay attention to "" and '' in SQL
# even though age is an integer, it is okay to quote it

# READ routes:

# 1. Index of all businesses
get "/businesses" do
  @results = db_query 'SELECT * FROM businesses;'
  erb :index
end

# Different blocks of code

# 2. Show page, details for one business
get "/businesses/:id" do
  @business = db_query "SELECT * FROM businesses WHERE id = #{ params[:id] };" # need DOUBLE QUOTES here for interpolation, don't forget ;_
  # We know there will only be one result, so pull it out of the array
  @business = @business.first   #@business[0]

  # p @

  # "Show page"
  erb :show
end

# 1. Prepopulated form for a specific business by ID
get "/businesses/:id/edit" do
  result = db_query "SELECT * FROM businesses WHERE id = #{ params[:id] };"
  @business = result.first
  erb :edit
end

# 2. Submit the edit form
post "/businesses/:id" do
  p params


  sql = "UPDATE businesses SET
            business_name        = '#{ params[:business_name] }',
            has_website          = '#{ params[:has_website] }',
            suburb               = '#{ params[:suburb] }',
            postcode             = '#{ params[:postcode] }',
            street_address       = '#{ params[:street_address] }',
            business_type        = '#{ params[:business_type] }',
            owner                = '#{ params[:owner] }'
            landline_number      = '#{ params[:landline_number] }'
            mobile_number        = '#{ params[:mobile_number] }'
            email                = '#{ params[:email] }'
            storefront_image_url = '#{ params[:storefront_image_url] }'
            date_added           = '#{ params[:date_added] }'
         WHERE id = #{ params[:id] };"

  db_query sql

  redirect "/businesses/#{ params[:id] }"   # redirect to the show (details) page for this business
end

# DELETE route
get "/businesses/:id/delete" do
  db_query "DELETE FROM businesses WHERE id = #{ params[:id] }"
  redirect "/businesses"   # No template to show, redirect to the index
end
