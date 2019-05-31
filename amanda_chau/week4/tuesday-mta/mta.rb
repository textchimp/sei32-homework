# MTA Lab
# Activity:
# Students should create a program that models a simple subway system.
#
# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints:
#
# the stations the user must pass through, in order
# where to change lines, if necessary
# the total number of stops for the trip.
# There are 3 subway lines:
#
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
# All 3 subway lines intersect at Union Square, but there are no other intersection points.
# For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.
# We should be able to say:
#
# plan_trip( :n, "Times Square", :l, "1st" )
# # Or something along those lines
# Hints:
# Don't worry about user input initially: get it working with hardcoded values first, and wire up the user interface once that's working
# Scope works in a different way in Ruby, so variables that you define outside won't be accessible in a method. Maybe think about using a function to return data. Or perhaps research other types of variables
# A symbol can't just be a number!
# Consider diagraming the lines by sketching out the subway lines and their stops and intersection.
# Make subway lines keys in a hash, while the values are an array of all the stops on each line.
# The key to the lab is to find the intersection of the lines at Union Square.
# Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

$mta = {
  n: [
      "Times Square",
      "34th",
      "28th",
      "23rd",
      "Union Square",
      "8th",
    ],
  l: [
      "8th",
      "6th",
      "Union Square",
      "3rd",
      "1st",
    ],
  six:[
      "Grand Central",
      "33rd",
      "28th",
      "23rd",
      "Union Square",
      "Astor Place",
    ],

} #end of MTA hash

def on_index(line, on)
  $mta[line].find_index(on)
end


def off_index(line, off)
  $mta[line].find_index(off)
end # can delete, do you need this?? no




def stops_made(line, on, off)

   first_index = on_index(line, on)
   last_index = off_index(line, off)

   # if index numbers are getting bigger
   if first_index < last_index
     stops_array = $mta[line][first_index + 1..last_index]
     puts stops_array  #can return instead of puts             #prints out stops
     # stops_array.length           #counts num of stops

   else
    # if index numbers are getting smaller
     stops_array = $mta[line][last_index..first_index - 1]
     puts stops_array.reverse
     # stops_array.length

   end
    stops_array.length
end #end of stopsMade

# stops_made(:n, "Union Square", "28th")
# stops_made(:n, "28th", "Union Square")


def planTrip(line, on, line2, off)

    if (line == line2)
      # stops_made(line, on, off)
      puts "Total stops: #{stops_made(line, on, off)}"
    else
      total1 = stops_made(line, on, "Union Square");
      puts "Change at Union Square";
      total2 = stops_made(line2, 'Union Square', off);
      puts "Total stops: #{total1 + total2}"
    end

end

planTrip(:n, "34th", :n, "Union Square")
planTrip(:n, "34th", :l, "8th")



# let numOfStops = 0;
#
# const mta = {
#
#    lines: {
#      N: [
#         'Times Square',
#         '34th',
#         '28th',
#         '23rd',
#         'Union Square',
#         '8th',
#       ],
#      L: [
#        '8th',
#        '6th',
#        'Union Square',
#        '3rd',
#        '1st',
#      ],
#      6: [
#        'Grand Central',
#        '33rd',
#        '28th',
#        '23rd',
#        'Union Square',
#        'Astor Place',
#      ]
#    },
#
#    startIndex: function(line, start){
#      return this.lines[line].indexOf(start); // finds index number of station in lines N L 6
#    },
#    stopIndex: function(line2, end){
#      return this.lines[line2].indexOf(end);
#    },
#    stopsMade: function(line, start, end){
#
#    const stations = this.lines[line]; // Just to simplify things
#
#    //let numOfStops = 0; // Allows you to keep track of number of stops
#    // If index numbers are getting larger
#    if (this.startIndex(line, start) < this.stopIndex(line, end)) {
#      for (let i = this.startIndex(line, start)+1; i <= this.stopIndex(line, end); i++) {
#        console.log(stations[i]);
#        numOfStops += 1;
#      } // end of loop CAN USE SLICE instead of FOR LOOP and .reverse()
#
#    } else {
#    // if index numbers are getting smaller
#      for (let i = this.startIndex(line, start)-1; i >= this.stopIndex(line, end); i--) {
#        console.log(stations[i]);
#        numOfStops += 1;
#      }
#    }
#
#  }, //end of stopsMade
#
#
#
#
# }; //end mta object
#
# mta.planTrip('6','28th','6','28th');
# mta.planTrip('6','28th','N','28th');
# mta.planTrip('N','28th','6','28th');
