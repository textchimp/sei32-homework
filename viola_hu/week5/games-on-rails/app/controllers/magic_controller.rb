class MagicController < ApplicationController

  def play
    # p params
    answers = [
      "Without a doubt!",
      "Yes, definitely!",
      "You may rely on it",
      "Better not tell you now...",
      "Cannot predict now...",
      "Outlook not so good...",
      "very doubtful..."
    ]
    @answer = answers.sample
  end
end
