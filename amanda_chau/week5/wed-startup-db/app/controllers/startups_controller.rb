class StartupsController < ApplicationController
  #create
  def new

  end

  def create
  end

  #read
  def index
    @startups = Startup.all
  end

  def show
    @startup = Startup.find params[:id]
  end

  #update
  def edit
  end

  def update
  end

  #delete
  def destroy
  end

end
