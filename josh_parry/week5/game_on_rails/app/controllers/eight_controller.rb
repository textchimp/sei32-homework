class EightController < ApplicationController

  def form
  end

  def answer
    answers = ["As I see it, yes",
      "Without a doubt",
      "You may rely on it",
      "Outlook good",
      "Better not tell you now",
      "Concentrate and ask again", "Very doubtful", "Don't count on it", "Outlook not so good"]
    @answer = answers[rand(0..8)]
    # .sample
  end



end
