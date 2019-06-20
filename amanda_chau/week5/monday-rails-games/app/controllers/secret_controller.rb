class SecretController < ApplicationController

  def guess
  end

  def answer
    @random_num = rand (1..10)

    # is this the correct way to do this?
    @message =
      if params[:guess_number].to_i == @random_num
        "Correct guess!"
      else
        "Sorry, your guess was incorrect!"
      end
  end
end
