# Write a program that, given a word, computes the scrabble score for that word.
#
# puts scrabble_score("cabbage")
# # => 14
# Your program should be in a file named scrabble.rb. You should be able to compute the score for any word entered by the user.

def scores
  {
    'a' => 1, 'e' => 1, 'i' => 1, 'o' => 1,
    'u' => 1, 'l' => 1, 'n' => 1, 'r' => 1,
    's' => 1, 't' => 1, 'd' => 2, 'g' => 2,
    'b' => 3, 'c' => 3, 'm' => 3, 'p' => 3,
    'f' => 4, 'h' => 4, 'v' => 4, 'w' => 4,
    'y' => 4, 'k' => 5, 'j' => 8, 'x' => 8,
    'q' => 10, 'z' => 10
  }
end

def special_score( score )
  # Sometimes give a double or triple letter score, sometimes give the original score
  random = Random.rand( 10 )

  if random < 3
    # roughly one-third of the time, this will be true
    puts "Double!"
    score * 2  # double-letter score!  (implicit return)
  elsif random == 9
    puts "Triple!!!!!"
    score * 3
  else
    score  # implicit return
  end

end  # special_score()

def scrabble_score( word )
  # Loop through each letter of the word, calculate the score for each letter,
  # and add it to a running total score
  total = 0
  word.chars.each do |letter|
    # Look up the current letter as a key in our scores hash, and add its value
    # (the score) to the running total
    total += special_score( scores[letter] )
  end

  total
end # scrabble_score()

print "Word score: ", scrabble_score( 'cabbage' )
puts
