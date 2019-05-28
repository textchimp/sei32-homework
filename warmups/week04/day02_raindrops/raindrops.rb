# Write a program that converts a number to a string per the following rules:
#
# If the number contains 3 as a factor, output 'Pling'. If the number contains 5 as a factor, output 'Plang'. If the number contains 7 as a factor, output 'Plong'.
#
# If the number does not contain 3, 5, or 7 as a factor, simply return the string representation of the number itself.
#
# E.g.
#
# The number 28 is divisible by 7, so...
#
# # => "Plong"
# The number 1755 is divisible by 3 and 5, so...
#
# # => "PlingPlang"
# The number 34 is not divisible by 3,5 or 7, so...
#
# # => "34"

def raindrops( number )

  output = ''

  # Does the number have 3 as a factor?
  # if number % 3 == 0
  #   output += 'Pling'
  # end

  output += 'Pling' if (number % 3 == 0)
  output += 'Plang' if (number % 5 == 0)
  output += 'Plong' if (number % 7 == 0)

  # Check if any of the above were factors, i.e. is output still empty?
  # if output.empty?
  #   return number   # return early with the original number
  # end
  return number if output.empty?

  output   # return output string from function
end  # raindrops()

print "input 6: "
puts raindrops(6)
print "input 10: "
puts raindrops(10)
print "input 28: "
puts raindrops(28)
print "input 1755: "
puts raindrops(1755)
print "input 34: "
puts raindrops(34)
