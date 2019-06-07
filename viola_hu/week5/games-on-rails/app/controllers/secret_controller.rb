class SecretController < ApplicationController

  def play

    secret_number = (1..10).to_a.sample

    p secret_number


    if params[:id] == secret_number
      @message = "Congratulations! The secret number is #{params[:id]}!"
    else
      @message = "Ooops! #{params[:id]} is not right! Try again?!"
    end

  end

end
