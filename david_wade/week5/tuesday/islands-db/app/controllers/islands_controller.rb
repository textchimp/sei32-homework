class IslandsController < ApplicationController







  #READ - indexpage
  def index
    @islands = Island.all
  end

def show
  @island = Island.find params[:id]
end

#Update - edit/update
def edit
  @island = Island.find params[:id]
end

def update
  island = Island.find params[:id]
  island.update(
    name: params[:name],
    demonym: params[:demonym],
    capital: params[:capital],
    currency: params[:currency],
    area: params[:area],
    image: params[:image],
  )

  redirect_to( island_path(island.id) )
end






















end
