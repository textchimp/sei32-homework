# open each file which is an arguement to running this Ruby script,
# read in each line of each file in ordger, and loop over them
# providing each line to the block as an arguement

# ruby regex.rb input.txt

#https://gist.github.com/samstokes/237534
#
# ARGF.each do |line|
#
#   if line.match(/(match)/)
#     matches = line.match(/(match)/)
#     puts matches[1]
#   # how to do I print out stuff before and after match
#
#   end
#
# end


# ARGF.each do |line|
#
#   puts line if line.match /a /
#
# end


# ARGF.each do |line|
#
#   if line.match(/(.*a )/)
#     puts line
#     # matches = line.match(/(.*a )/)
#     $1
#     puts "$1 #{$1}"
#   # how to do I print out stuff before and after match
#
#   end
#   # puts line if line.match /(.*a )/
#
# end



ARGF.each do |line|
# why doesn't ^ or  work? 
  if matches = line.match(/[^, ](?<word>.*a )/)
    puts line
    # matches = line.match(/(?<word>.*a )/)

    puts "matches[:word] #{matches[:word]}"

  # how to do I print out stuff before and after match

  end
  # puts line if line.match /(.*a )/

end


# (?<balance>d{1,}.d{2})



#
# ARGF.each do |line|
#   # \S non whitespace
#
#   # puts line if line =~ /(fred.*wilma|wilma.*fred)/
#
#   puts line if line.include?('wilma') && line.include?('fred')
#
# end



# Using the pattern test program, make a pattern to match the string match. Try the program with the input string beforematchafter. Does the output show the three parts of the match in the right order?
#
# Using the pattern test program, make a pattern that matches if any word (in the \w sense of word) ends with the letter a. Does it match wilma but not barney? Does it match Mrs. Wilma Flintstone? What about wilma&fred? Try it on the sample text file from the last exercises (and add these test strings if they weren’t already in there).
#
# Modify the program from the previous exercise so that the word ending with the letter a is captured into $1. Update the code to display that variable’s contents in single quotes, something like $1 contains 'Wilma'.
#
# Modify the program from the previous exercise to use named captures instead of relying on $1. Update the code to display that label name, something like 'word' contains 'Wilma'.
#
# Extra credit exercise: modify the program from the previous exercise so that immediately following the word ending in a it will also capture up-to-five characters (if there are that many characters, of course) in a separate capture variable. Update the code to display both capture variables. For example, if the input string says I saw Wilma yesterday, the up-to-five characters are "yest". If the input is I, Wilma!, the extra capture should have just one character. Does your pattern still match just plain wilma?
#
# Write a new program (not the test program!) that prints out any input line ending with whitespace (other than just a newline). Put a marker character at the end of the output line so as to make the whitespace visible.
