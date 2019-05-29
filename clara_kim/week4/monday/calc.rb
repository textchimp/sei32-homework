# Calculator
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
# distance
# miles per gallon
# price per gallon
# speed in miles per hour


print "Enter your first number: (Weight in kg for BMI)"

first_number = gets.to_f

print "Enter your second number: (Height in cm for BMI)"

second_number = gets.to_f

puts "Enter 1 for: +"
puts "Enter 2 for: -"
puts "Enter 3 for: *"
puts "Enter 4 for: /"
puts "Enter 5 for: BMI Calculation"

print "Enter corresponding number for the operation you would like to do:"

operations = gets.to_i

def addition(first, second)
  first_number + second_number
end

def subtraction(first, second)
  first_number - second_number
end

def multiplication(first, second)
  first_number * second_number
end

def division(first, second)
  first_number / second_number
end

def bmi(first, second)
  first_number / (second_number**2)
end

case operations
  if operation == 1
    puts "Your answer is: #{addition first_number, second_number}"
  elsif operation == 2
    puts "Your answer is: #{subtraction first_number, second_number}"
  elsif operation == 3
    puts "Your answer is: #{multiplication first_number, second_number}"
  elsif operation == 4
    puts "Your answer is: #{division first_number, second_number}"
  elsif operation == 5
    puts "Your answer is: #{bmi first_number, second_number}"
  end
