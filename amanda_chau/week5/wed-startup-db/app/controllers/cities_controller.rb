class CitiesController < ApplicationController

#CREATE
  def new
    @city = City.new
  end

  def create
    City.create city_params

    redirect_to cities_path
  end

# READ
  def index
    @cities = City.all
  end

  def show
    @city = City.find params[:id]
  end

  def edit
    @city = City.find params[:id]
  end

  #update
  def update
    city = City.find params[:id]
    city.update city_params

    redirect_to city_path(city.id)
  end

  #delete
  def destroy
    City.destroy params[:id]

    redirect_to cities_path
  end

  private

  def city_params
    params.require(:city).permit(:name, :population, :num_startups, :avg_val, :image)
  end
end
