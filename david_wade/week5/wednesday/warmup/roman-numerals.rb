# ## Roman Numerals
#
# The Romans were a clever bunch. They conquered most of Europe and ruled it for hundreds of years. They invented concrete and straight roads and even bikinis. One thing they never discovered though was the number zero. This made writing and dating extensive histories of their exploits slightly more challenging, but the system of numbers they came up with is still in use today. For example, the BBC uses Roman numerals to date their programmes.
#
# The Romans wrote numbers using letters - I, V, X, L, C, D, M. (notice these letters have lots of straight lines and are hence easy to hack into stone tablets using a chisel).
#
# ```
#  1  => I
# 10  => X
#  7  => VII
# ```
#
# Write a program that will convert Arabic numerals to Roman numerals.
#
# There is no need to be able to convert numbers larger than about 3000. (The Romans themselves didn't tend to go any higher)
#
# Wikipedia says: _"Modern Roman numerals ... are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero."_
#
# To see this in practice, consider the example of 1990.
#
# In Roman numerals 1990 is MCMXC:
#
# 1000=M
# 900=CM
# 90=XC
#
# 2008 is written as MMVIII:
#
# 2000=MM
# 8=VIII
#
# See also: http://www.novaroma.org/via_romana/numbers.html

# roman_numerals = {
#   I: 1,
#   V: 5,
#   X: 10,
#   L: 50,
#   C: 100,
#   D: 500,
#   M: 1000
# }
#
# roman_numerals.each do |key,value|
#
# puts all
#
# end

class Roman



 def intialize

   #make an instance variable that we can use in any other method of this class

   @roman_map = {
     1000 => 'M',
     900 => 'CM',
     500 => 'D',
     400 => 'CD',
     100 => 'C',
     90 => 'XC',
     50 => 'L'
     40 => 'Xl',
     10 => 'X',
     9 => 'IX',
     5 => 'V',
     4 => 'IV',
     1 => 'I'
   }

end




def to_roman( number )

  output = ''
  @roman_map.each do |key, value|
    puts "#{key}: #{value}"
  while number >= key
    #if the current unmber key in our hash fits into the input number ( the date)
    #add the value for that key ( the roman numerak string to our output string)

   output += value
   number -= key # subtract the number we just processed (the key ) from the input number (date)
  end

  output

end#to roman().each




end # # end of class

r = Roman.new
r.to_roman( 1990 )
