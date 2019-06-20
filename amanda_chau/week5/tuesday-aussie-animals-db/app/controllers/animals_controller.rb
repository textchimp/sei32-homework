class AnimalsController < ApplicationController

skip_before_action :verify_authenticity_token, raise: false
#create
  def new

  end

  def create

    Animal.create(
      name: params[:name],
      image: params[:image],
      location: params[:location],
      diet: params[:diet],
      min_mass: params[:min_mass],
      max_mass: params[:max_mass],
      lifespan: params[:lifespan],
      marsupial: params[:marsupial]
    )

  redirect_to(animals_path)
  end



#Read

  def index
    @animals = Animal.all
  end

  def show
    @animal = Animal.find params[:id]
  end

#update
  def edit
    @animal = Animal.find params[:id]
  end

  def update
    animal = Animal.find params[:id]
    animal.update(
      name: params[:name],
      image: params[:image],
      location: params[:location],
      diet: params[:diet],
      min_mass: params[:min_mass],
      max_mass: params[:max_mass],
      lifespan: params[:lifespan],
      marsupial: params[:marsupial]
    )
    redirect_to( animal_path(animal.id) )
  end

#Delete
  def delete
    Animal.destroy params[:id]

    redirect_to( animals_path )

  end

end
