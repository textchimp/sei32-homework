#
# When robots come off the factory floor at Badger Robotics, they have no name.
#
# The first time you boot them up, a random name is generated, such as RX837 or BC811.
#
# In other words, if I say:
#
# robot1 = Robot.new
# puts robot1.name
# puts robot1.name
# puts robot1.name
#
# robot2 = Robot.new
# puts robot2.name
# puts robot2.name
# puts robot2.name
# then robot1 will print the same name 3 times, and robot2 will not have the same name as robot1.
#
# Every once in a while we need to reset a robot to its factory settings, which means that their name gets wiped. The next time you ask, it gets a new name.
#
# if I say:
#
# robot3 = Robot.new
# puts robot3.name
# puts robot3.name
# puts "Resetting to factory settings."
# robot3.reset
# puts robot3.name
# puts robot3.name
# then robot3 will have the same name twice, then we'll get the reset message, then it will get a new name, and print it twice.
#
# All robots have a mac address. The mac address never changes, even if you reset it to factory settings.


class Robot

  # this writes name() and name=( val ) for us,
  # i.e. both GETTER and SETTER methods
  # attr_accessor :name

  def initialize
    puts "Making a new robot..."
    generate_name
    @mac_address = generate_letters 6
    @instruction_counter = 0
    @created_time = Time.now.to_i  # get the number of seconds since midnight January 1, 1970 (the 'Unix Epoch')
  end

  def timers
    time_since_created = Time.now.to_i - @created_time
    puts "This robot was created #{ time_since_created } seconds ago."
  end

  # getter - return the value of an instance variable
  def name
    # puts "Getting you the contents of @name..."
    @instruction_counter += 1
    @name
  end

  #
  # # setter - change the value of an instance variable
  # def name=( val )
  #   @name = val
  # end

  def generate_letters( length )
    ('A'..'Z').to_a.sample( length ).join
  end


  def generate_numbers( length )
    (0..9).to_a.sample( length ).join
  end

  def generate_name
    @name = generate_letters( 2 ) + generate_numbers( 3 )
  end

  def reset
    @instruction_counter += 1
    generate_name
  end

  def instruction_counter
    @instruction_counter
  end

end  # Robot

r1 = Robot.new

require 'pry'; binding.pry
puts
