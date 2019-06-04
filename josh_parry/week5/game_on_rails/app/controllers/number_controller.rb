class NumberController < ApplicationController

  def form
  end

  def check
    rand_number = rand(0..10)
    @number = params[:check].to_i
    # @result = ""
    if @number == rand_number
      @result = "You guessed it!"
    else
      @result = "Sorry this is not the right number. Correct number was #{rand_number}"
    end
  end # end of check()

end
