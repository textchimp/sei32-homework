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

post "/bands" do

end
