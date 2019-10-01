class MagicController < ApplicationController

  def question

  end

  def say_hi_to
    @hello_recipient = params[:name]
  end


end# end of MagicController
