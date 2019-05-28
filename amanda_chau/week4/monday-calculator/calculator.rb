# Explanation
# You will be building a calculator which can perform multiple arithmetic operations. Your program should allow the user to choose which operation to perform, enter the values on which the operation is performed, and output the result.
# Specification:
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# The menu should be displayed again, and process should continue until the user selects a quit option from the menu
# Phase 1
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)
# Phase 2
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)
# Bonus
# Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)
#
# BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight
#
# Trip Calculator
# Calculate a trip time and cost given inputs for
#



# methods
def menu
  puts "Choose an operation or quit:"
  puts "1 +"
  puts "2 -"
  puts "3 *"
  puts "4 /"
  puts "5 ^"
  puts "6 √"
  puts "7 Mortgage calculator"
  puts "8 BMI calculator"
  puts "9 Trip calculator"
  puts "10 quit"
  print "Enter number only: "
end


def add (num1, num2)
  return "#{num1} + #{num2} = #{num1 + num2}"
end

def subtract (num1, num2)
  return "#{num1} - #{num2} = #{num1 - num2}"
end

def multiply (num1, num2)
  return "#{num1} x #{num2} = #{num1 * num2}"
end

def divide (num1, num2)
  return "#{num1} / #{num2} = #{num1 / num2}"
end

def exponent (num1, num2)
  return "#{num1}^#{num2} = #{num1**num2}"
end

def square_root (num1)
  return "√#{num1} = #{Math.sqrt(num1)}"
end

def bmi (weight, height)
  return "Your BMI is #{(weight/height**2*10000).round(2)}"
end

# loop through menu unless you choose to quit
operation = 0

until operation == 10

  # display menu and person to select item
  menu
  operation = gets.to_i

  # 7 is to quit loop
  if operation > 0 && operation < 7

    print "Enter first number: "
    first_num = gets.to_f

    # square root only requires one value
    unless operation == 6
      print "Enter second number: "
      second_num = gets.to_f
    end


    calculate = case operation
      when 1 then add first_num, second_num
      when 2 then subtract first_num, second_num
      when 3 then multiply first_num, second_num
      when 4 then divide first_num, second_num
      when 5 then exponent first_num, second_num
      when 6 then square_root first_num
    end

    puts "Answer: #{calculate}"
  end

  if operation == 7
    puts "This method is not yet supported"
  end

  if operation == 8
    print "Enter weight (kg): "
    weight = gets.to_f

    print "Enter height (cm): "
    height = gets.to_f

    your_bmi = bmi weight, height

    puts "#{your_bmi}"
  end

  # if operation == 9 
  #   print "Enter distance (km): "
  #   distance = gets.to_f
  #
  #   print "Enter fuel efficacy (km/litre): "
  #   km_per_liter = gets.to_f
  #
  #   print "Gas price per litre: "
  #   price_per_liter = gets.to_f
  #
  #   print "Speed (km/hour): "
  #   speed = gets.to_f
  # end
  #


    # distance
    # miles per gallon
    # price per gallon
    # speed in miles per hour
end




#
# if operation == 1
#  calculate = add first_num, second_num
# elsif operation == 2
#  calculate = subtract first_num, second_num
# elsif condition operation == 3
#  calculate = multiply first_num, second_num
# elsif operation == 4
#  calculate = divide first_num, second_num
# elsif operation == 5
#  calculate = exponent first_num, second_num
# elsif operation == 6
#  calculate = square_root first_num
# end
#   puts "Answer: #{calculate}"
