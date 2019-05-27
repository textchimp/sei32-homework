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

#menu
loop do

puts "----------Calculator----------"
puts "Addition: Press 1"
puts "Subtraction: Press 2"
puts "Multiplication: Press 3"
puts "Division: Press 4"
# puts "To Exit: Press 0"

selection = gets.to_i

case selection
when 1 then
  puts "Add: "
  puts " enter x "
  x = gets.to_f
  puts "Add"
  puts " plus y "
  y = gets.to_f
  puts "#{x} + #{y} = #{x + y}"
when 2 then
  puts " Subtract: "
  puts " enter x "
  x = gets.to_f
  puts " Subtract: "
  puts " enter y "
  y = gets.to_f
  puts "#{x} - #{y} = #{x - y}"
when 3 then
  puts "multiply: "
  puts " enter x "
  x = gets.to_f
  puts "multiply: "
  puts " enter y "
  y = gets.to_f
  puts "#{x} * #{y} = #{x * y}"
when 4 then
  puts "division: "
  puts " enter x "
  x = gets.to_f
  puts "division: "
  puts " enter y "
  y = gets.to_f
  puts "#{x} / #{y} = #{x / y}"
end # end of case selection

end # end of loop do
