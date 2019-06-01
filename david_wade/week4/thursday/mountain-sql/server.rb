require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'



def db_query( sql )
  db = SQLite3::Database.new 'database.db'
  db.results_as_hash = true
  puts '======================'
  puts sql
  puts '======================'
  result = db.execute sql
  db.close
  result
end


get "/mountains" do
  db = SQLite3::Database.new 'database.db'
  db.results_as_hash = true
  @results = db.execute 'SELECT * FROM mountains;'
  db.close #close the connection to the db
  erb :index
end
