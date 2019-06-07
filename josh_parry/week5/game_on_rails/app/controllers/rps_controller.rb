class RpsController < ApplicationController

  def form
  end

  def throw
    rps = {"rock" => 0, "paper" => 1, "scissors" => 2}

    #variables
    @server_guess = rand(0..2)
    @server_rps = rps.key(@server_guess)
    @user = rps[params[:throw]]
    @user_rps = rps.key(@user)

    #One liner
    @winner = (3 + @user - @server_guess) % 3

    #Determine result
    @result = ""
    if @winner == 1
      @result = "User wins!"
    elsif @winner == 2
      @result = "Computer wins"
    else
      @result = "Tie."
    end

  end

end #end of RpsController
