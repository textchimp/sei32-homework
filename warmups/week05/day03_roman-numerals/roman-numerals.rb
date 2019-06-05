# 1  => I
# 10  => X
#  7  => VII
# Write a program that will convert Arabic numerals to Roman numerals.
#
# There is no need to be able to convert numbers larger than about 3000. (The Romans themselves didn't tend to go any higher)
#
# Wikipedia says: "Modern Roman numerals ... are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero."
#
# To see this in practice, consider the example of 1990.
#
# In Roman numerals 1990 is MCMXC:
#
# 1000=M 900=CM 90=XC
#
# 2008 is written as MMVIII:
#
# 2000=MM 8=VIII


class Roman

  def initialize
    # Make an instance variable that we can use in any other method of this class
    @roman_map = {
      1000 => 'M',
       900 => 'CM',
       500 => 'D',
       400 => 'CD',
       100 => 'C',
        90 => 'XC',
        50 => 'L',
        40 => 'XL',
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
      # puts "#{key}: #{value}"

      puts "EACH: #{ key } => #{ value }, number: #{ number }"

      # This loop will not run at all if our current key doesn't fit into the input number
      # (instead we'll jump to the next iteration of the each loop, testing the next largest number)
      while number >= key

        # If the current number (key) in our hash fits into the input number (the date),
        # append the value for that key (the roman numeral string) to our output string
        output += value
        puts "  WHILE: #{ number } >= #{ key }, so add #{ value } to output; new output = #{ output }"

        puts "  WHILE: number -= key: #{ number } - #{ key } = #{ number - key }"
        number -= key   # subtract the number we just processed (the key) from the input number (date)

        puts "  ------------- end while"
      end   #  while

      break if number == 0

      puts "........ end each"
    end  # @roman_map.each

    output
  end  # to_roman()


end  # class Roman

r = Roman.new
print "1990 in roman numerals is: ", r.to_roman( 2990 )
puts
