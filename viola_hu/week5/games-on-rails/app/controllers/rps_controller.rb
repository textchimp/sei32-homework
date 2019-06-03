class RpsController < ApplicationController




  def play
    @app_throw = %w{rock paper scissors}.sample
    @user_throw = params[:throw]
    
    if @user_throw == "rock" && @app_throw == "scissors"
      @message = "Congratulations! You won!!!"
    elsif @user_throw == "scissors" && @app_throw == "paper"
      @message = "Congratulations! You won!!!"
    elsif @user_throw == "paper" && @app_throw == "rock"
      @message = "Congratulations! You won!!!"
    else
      @message = "Ooops! No luck! Try again?!"
    end

  end

end
