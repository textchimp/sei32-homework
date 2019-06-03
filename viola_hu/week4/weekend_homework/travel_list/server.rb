require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',       # what is the DB system we are using?
  database: 'database.db'   # where are the database contents?
)

# Log out all the SQL queries constructed by ActiveRecord
ActiveRecord::Base.logger = Logger.new(STDERR)

# This code will run after any specific route block runs
# This is a Sinatra feature which makes our route blocks DRYer
after do
  ActiveRecord::Base.connection.close
end




# This is our model of the 'places' table - a class
class Place < ActiveRecord::Base

  # one place belongs to one country
  # this requires the 'country_id' field in the 'places' table
  belongs_to :country

  # one place belongs to one continent
  # this requires the 'continent_id' field in the 'places' table
  belongs_to :continent
end



class Country < ActiveRecord::Base

  # one country belongs to one continent
  # this requires the 'continent_id' field in the 'countries' table
  belongs_to :continent


  # one country has many places to visit
  # this requires the 'country_id' filed in the 'places' table
  has_many :places
end



class Continent < ActiveRecord::Base

  # one continent has many countries
  # this requires the 'continent_id' field in the 'countries' table
  has_many :countries

  # one continent has many places to visit
  # this requires the 'continent_id' field in the 'places' table
  has_many :places
end




################################################
# CRUD routes for continents

# READ: index
get "/continents" do
  @continents = Continent.all # an array of all contents objects of Continent class

  erb :continents_index
end

# READ: show
get "/continents/:id" do
  @continent = Continent.find params[:id] # an object/instance of Continent class that matches the id

  erb :continents_show
end


#################################################
# CRUD routes for countries
#
# READ: index
get "/countries" do
  @countries = Country.all

  erb :countries_index
end

# READ: show
get "/countries/:id" do
  @country = Country.find params[:id]

  erb :countries_show
end


##############################################
# CRUD routes for places table

# create a method to be used when edit a place or delete a place,
# if the current country is not used by other places, delete the country from Country class, save momery!
def delete_unused_country (id)
  if Place.where(country_id: id).length == 1
    to_be_deleted = Country.find id
    to_be_deleted.destroy
  end
end

# CREATE: new
get "/places/new" do
  erb :places_new
end

# CREATE: form submits to here, redirects to index
post "/places" do
  # params[:country_id] is a string by user input, not a number
  # if the input country doesn't exist in the Country class, create a new one with accoring continent_id
  matching_country = Country.find_by(name: params[:country_id])
  if  matching_country == nil
    Country.create(
      name: params[:country_id],
      continent_id: params[:continent_id]
    )
    input_country_id = Country.last.id
  else
    input_country_id = matching_country.id
  end

  Place.create(
    name:         params[:name],
    visited:      params[:visited],
    visit_time:   params[:visit_time],
    image_url:    params[:image_url],
    description:  params[:description],
    continent_id: params[:continent_id],
    country_id:   input_country_id
  )

  redirect "/places"
end

# READ: index
get "/places" do
  @places = Place.all
  # returns all instances/objects of Place class in an array
  # == get every row/place in the 'places' table
  # p @places
  erb :places_index
end

# READ: show
get "/places/:id" do
  @place = Place.find params[:id]
  # find the matching row of 'places' table by id
  # returns the instance/object of Place class that matches the id
  # params is a hash!!!!
  erb :places_show
end

# UPDATE: edit
get "/places/:id/edit" do
  @place = Place.find params[:id] # returns an object/instance of Place class that matches the id
  erb :places_edit
end

# UPDATE: edited form submit to here, redirects to show page!
post "/places/:id" do

  place = Place.find params[:id] #place is an object/instance of Place class that matches the id
  place.update(
    name:         params[:name],
    visited:      params[:visited],
    visit_time:   params[:visit_time],
    image_url:    params[:image_url],
    description:  params[:description],
    continent_id: params[:continent_id]
  )

  # params[:country_id] is a string by user input, not a number
  # if the existing country name of the place matches new input or not
  if place.country.name != params[:country_id]

    # to save memory, delete unused country object
    delete_unused_country(place.country_id)

    # if not, check if the input country name already exists in the Country class
    matching_country = Country.find_by(name: params[:country_id])

    # if not exists, create a new country object in Country class first
    if matching_country == nil
      Country.create(
        name: params[:country_id],
        continent_id: params[:continent_id]
      )
      input_country_id = Country.last.id
    else
      input_country_id = matching_country.id
    end

    #finally, update this place object's country_id
    place.update(
     country_id: input_country_id,
    )
  end

  redirect "/places/#{params[:id]}" #redirect to show page for this id place object
end

# DELETE: remove item from DB and redirect to index
get "/places/:id/delete" do
  to_be_deleted = Place.find params[:id]

  # if the to_be_deleted place's country_id is not used by other places,
  # delete the country instance from Country class
  delete_unused_country (to_be_deleted.country_id)

  to_be_deleted.destroy


  # Place.destroy params[:id] short way! one step instead of 2 steps

  redirect "/places"
end
