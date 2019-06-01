require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'
require 'active_record'

ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
  database: 'database.db'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

after do
  ActiveRecord::Base.connection.close
end

class Band < ActiveRecord::Base
  has_many :albums
end

class Album < ActiveRecord::Base
  belongs_to :bands
end

#C Create
get "/bands/new" do
  erb :new_bands
end

post "/bands" do

  Band.create(
    name:      params[:name],
    genre:     params[:genre],
    albums:    params[:albums],
    active:    params[:active],
    image_url: params[:image_url],
  )
  redirect "/bands"
end

#R - Read
get "/bands" do
  @results = Band.all
  erb :index_bands
end

get "/bands/:id" do
  @bands = Band.find params[:id]
  erb :show_bands
end

#U - Update
get "/bands/:id/edit" do
  @bands = Band.find params[:id]
  erb :edit_bands
end

post "/bands/:id" do
  band_to_update = Band.find(params[:id])

  band_to_update.update(
    name:      params[:name],
    genre:     params[:genre],
    albums:    params[:albums],
    active:    params[:active],
    image_url: params[:image_url],
  )
  redirect "/bands/#{params[:id]}"
end

#D - Delete
get "/bands/:id/delete" do
  bands_to_delete = Band.find params[:id]
  bands_to_delete.destroy
  redirect "/bands"
end

#R - Read
get "/albums" do
  @results = Album.all
  erb :index_albums
end

get "/albums/:id" do
  @albums = Album.find params[:id]
  erb :show_albums
end
