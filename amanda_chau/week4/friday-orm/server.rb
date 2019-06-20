require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'
require 'active_record'

ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
  database: 'database.db'
)

#what does this do?
ActiveRecord::Base.logger = Logger.new(STDERR)

after do
  ActiveRecord::Base.connection.close
end


class Art < ActiveRecord::Base
  belongs_to :artist
end

# binding.pry
# The following was entered in pry:
# Art.all
# Art.all.length
# Art.find 1
# art_to_add = Art.create
#
# art_to_update = Art.find 5
# art_to_update.update(year: 2019)
#
# art_to_delete = Art.find 5
# art_to_delete.destroy


class Artist < ActiveRecord::Base
  has_many :arts
end


# Art routes

# CREATE routes
get "/arts/new" do
  erb :art_new
end

post "/arts" do

  # p params

  Art.create(
    name: params[:name],
    year: params[:year],
    medium: params[:medium],
    image_url: params[:image_url],
    artist_id: params[:artist_id]
  )


  redirect "/arts"
end




# READ routes

get "/arts" do

  @results = Art.all

  erb :art_index

end

get "/arts/:id" do

  # returns a hash for each art work
  @art = Art.find params[:id]


  erb :art_show
end



# UPDATE routes

get "/arts/:id/edit" do

  @art = Art.find params[:id]

  # p @art

  erb :art_edit

end


post "/arts/:id" do

# two step process to update, save as variable and then update
  art_to_update = Art.find params[:id]

  art_to_update.update(
    name: params[:name],
    year: params[:year],
    medium: params[:medium],
    image_url: params[:image_url],
    artist_id: params[:artist_id]
  )


  redirect "/arts/#{params[:id]}"
end

# DELETE routes

get "/arts/:id/delete" do

  # there is a way to destroy in one step
  # Art.destroy params[:id]
  art_to_delete = Art.find params[:id]
  art_to_delete.destroy

  redirect "/arts"
end




# Artist routes

# CREATE routes

get "/artists/new" do
  erb :artist_new
end

post "/artists" do

  # p params

  Artist.create(
    name: params[:name],
    birthdate: params[:birthdate],
    alive: params[:alive],
    nationality: params[:nationality],
    movement: params[:movement]
  )


  redirect "/artists"
end

# READ routes
get "/artists" do

  @results = Artist.all
  erb :artist_index

end

get "/artists/:id" do

  @artist = Artist.find params[:id]
  @results = Art.where artist_id: params[:id]

  p @results

  erb :artist_show

end


# UPDATE routes

get "/artists/:id/edit" do

  @artist = Artist.find params[:id]

  # p @art

  erb :artist_edit

end


post "/artists/:id" do

# two step process to update, save as variable and then update
  artist_to_update = Artist.find params[:id]

  artist_to_update.update(
    name: params[:name],
    birthdate: params[:birthdate],
    alive: params[:alive],
    nationality: params[:nationality],
    movement: params[:movement]
  )


  redirect "/artists/#{params[:id]}"
end

# DELETE routes

get "/artists/:id/delete" do

  # there is a way to destroy in one step
  # Art.destroy params[:id]
  artist_to_delete = Artist.find params[:id]
  artist_to_delete.destroy

  redirect "/artists"
end
