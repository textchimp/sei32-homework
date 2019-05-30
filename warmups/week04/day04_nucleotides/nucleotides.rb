# Write a program that will tell you how many times each nucleotide occurs in a string.
#
# It should also tell you if a character in the string is not a valid nucleotide.
#
# Example:
#
# count_nucleotides "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"
# # output:
# A: 20
# C: 12
# G: 17
# T: 21

def count_nucleotides( dna )

  bases_count = {
    'A' => 0,
    'C' => 0,
    'T' => 0,
    'G' => 0
  }

  dna.chars.each do |base|
    if bases_count.key? base
      bases_count[ base ] += 1
    else
      puts "#{ base } is not a valid nucleotide."
    end
  end

  bases_count.each do |key, val|
    puts "#{ key }: #{ val }"
  end

  # bases_count
end # count_nucleotides()


count_nucleotides( "AGCTTTTCAXTTCTGACTGCAACGGGCAATATGTCTCTYGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC" )
