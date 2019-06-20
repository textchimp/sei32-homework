#
# mta = {
#   :N => ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
#   :L => ['8th', '6th', 'Union Square', '3rd', '1st'],
#   6 => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
#  }

N = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']
L = ['8th', '6th', 'Union Square', '3rd', '1st']
six = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']

p N
p L
p six

puts "Please enter start line"
$start_line = gets.chomp

puts "Please enter start station"
start_station = gets.chomp

puts "please enter finish line"
finish_line = gets.chomp

puts "please enter finish station"
finish_station = gets.chomp

p "start_line #{$start_line}"
p "start_station #{start_station}"
p "finish_line #{finish_line}"
p "finish_station #{finish_station}"

if $start_line == finish_line
  puts "start_line #{$start_line}"
  puts true
  p $start_line.index("Times Square")
end



# if start_line == finish_line
#   start_position = start_line.index(start_station)
#   finish_position = finish_line.index(finish_station)
#
#   p "start_position #{start_position}"
#   p "finish_position #{finish_position}"
#
#   if start_position < finish_position
#
#     puts start_line[start_position..finish_position]
#
#   end
#
# end
#



#get the index of the first station


#get the index of the second station

#have indexes of Union Square
