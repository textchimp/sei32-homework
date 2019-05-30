require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

#function to plug in the thingo to the whats it
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
  db.result_as_hash = true
  @result = db.execute 'INSERT * FROM mountains;'
  db.close
  erb :index
end
