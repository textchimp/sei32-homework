# This is called the 'Hamming distance'
#
# GAGCCTACTAACGGGAT
# CATCGTAATGACGGCCT
# ^ ^ ^  ^ ^    ^^
# The Hamming distance between these two DNA strands is 7.
#
# Write a program that can calculate the Hamming difference between two DNA strands.
#
# Use a class to structure your code, if you feel confident!
#
# Source

strand_one = "GAGCCTACTAACGGGAT"
strand_two = "CATCGTAATGACGGCCT"

difference = 0

# require 'pry'; binding.pry


positions = Array.new( strand_one.length, ' ' )

# Turn the first string into an array and then iterate over each element
# (each character), comparing the character against the same position in
# the second string. To do this, we'll need both the current character
# AND the index position, in our loop block variables.
strand_one.chars.each_with_index do |char, index|

  # check if the current character is not the same as in strand_two at this position
  # puts "strand one character: #{ strand_one[ index ] }"   # char
  # puts "strand two character: #{ strand_two[ index ] }"


  if strand_one[ index ] != strand_two[ index ]
    difference += 1
    positions[ index ] = '^'
    # puts "FOUND DIFFERENCE!"
  end

end   # each_with_index

# puts strand_one
# puts strand_two
# puts positions.join('')
# puts "The hamming distance is #{difference}."


class DNA

  # This method is what runs when you write " DNA.new('ABC', 'ABD') "
  def initialize(str1, str2)
    # Save both arguments given to the constructor into instance variables,
    # to use in other methods of this class
    @strand_one = str1
    @strand_two = str2
  end

  def hamming_distance

    difference = 0
    positions = Array.new( @strand_one.length, ' ' )

    @strand_one.chars.each_with_index do |char, index|

      if @strand_one[ index ] != @strand_two[ index ]
        difference += 1
        positions[ index ] = '^'
      end

    end  # each_with_index

    puts "The hamming distance is #{difference}."
    puts @strand_one
    puts @strand_two
    puts positions.join

  end # hamming_distance()


end  # class DNA

# dna = DNA.new( "GAGCCTACTAACGGGAT", "CATCGTAATGACGGCCT" )
dna = DNA.new( "ABC", "ABD" )
dna.hamming_distance
