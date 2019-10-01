# # Calculator
#
# ### Explanation
# - You will be building a calculator which can perform multiple arithmetic operations. Your program should allow the user to choose which operation to perform, enter the values on which the operation is performed, and output the result.
#
# ### Specification:
# - A user should be given a menu of operations
# - A user should be able to choose from the menu
# - A user should be able to enter numbers to perform the operation on
# - A user should be shown the result
# - The menu should be displayed again, and process should continue until the user selects a quit option from the menu
#
# #### Phase 1
# - Calculator functionality
# - Calculator should be able to do basic arithmetic (+,-, *, /)

# def good_bye
#   puts "Good Bye!"
# end
#menu
# loop do

require 'colorize'

def bmi(weight, height)
  result = weight / height
  if result > 20 && result < 25
    puts "You're in a healthy BMI range"
  elsif result > 25 && result <30
    puts "Your BMI number is out of the recommended range"
  elsif result > 18 && result < 20
    puts "Your BMI number is out of the recommended range"
  else
    puts "Time to make some life changes"
  end
end





 loop do


puts "----------Calculator----------"
puts "Addition: Press 1"
puts "Subtraction: Press 2"
puts "Multiplication: Press 3"
puts "Division: Press 4"
puts "Exponent: Press 5"
puts "BMI calculator: Press 6"

selection = gets.to_i

case selection
when 1 then
  puts " enter x "
  x = gets.to_f
  puts " enter y"
  y = gets.to_f
  puts "#{x} + #{y} = #{x + y}".green
when 2 then
  puts " enter x "
  x = gets.to_f
  puts " enter y "
  y = gets.to_f
  puts "#{x} - #{y} = #{x - y}".green
when 3 then
  puts " enter x "
  x = gets.to_f
  puts " enter y "
  y = gets.to_f
  puts "#{x} * #{y} = #{x * y}".green
when 4 then
  puts " enter x "
  x = gets.to_f
  puts " enter y "
  y = gets.to_f
  puts "#{x} / #{y} = #{x / y}".green
when 5 then
  puts " the square root of: enter x "
  x = gets.to_f
  puts " to the power of: enter y "
  y = gets.to_f
 puts "#{x} to the power of #{y} = #{x ** y}".green
when 6 then
  puts "What is your body mass?"
  x = gets.to_f
  puts "What is your height?"
  y = gets.to_f
  puts "Your BMI is #{x / y} : #{bmi(x, y)}".green

end # end of case selection

end # end of loop do
