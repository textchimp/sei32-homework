class CompaniesController < ApplicationController

  def new
    @company = Company.new
  end

  def index
    @companies = Company.all
  end

  def show
    @company = Company.find params[:id]
  end

  def edit
    @company = Company.find params[:id]
  end

  def update
    company = Company.find params[:id]
    company.update company_params

    redirect_to(company_path( company.id ))
  end

  def destroy
  end

  def company_params
    params.require(:company).permit(:name, :headquarters, :traded_as, :founded, :revenue, :image)
  end
end
