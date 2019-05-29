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

want_to_quit = false

until want_to_quit == true

  print "choose the calculation to perform: +, -, *, /, **, √ , or quit: "

  operation = gets.chomp # puts operation.class -string

  if operation == "quit"
    want_to_quit = true
  else
    #define a method
    def second_value
      print "type in the second number: "
      gets.chomp.to_f
    end

    print "type in the first number: "
    value1 = gets.chomp.to_f   # puts value1.class - float

    case operation
    when '+'
      value2 = second_value
      puts "#{value1 + value2}"
    when '-'
      value2 = second_value
      puts "#{value1 - value2}"
    when "*"
      value2 = second_value
      puts "#{value1 * value2}"
    when "/"
      value2 = second_value
      puts "#{value1 / value2}"
    when "**"
      value2 = second_value
      puts "#{value1 ** value2}"
    when "√" then puts "#{Math.sqrt(value1)}"
    end
  end
end

# value2 = 0
# def second_value
#   print "type in the second number: "
#   value2 = gets.chomp.to_f
# end
#
# puts second_value
# puts value2 => Q: why value2 is still 0?
#
# puts "#{value1 + value2}"

# line 36 create a variable 'output = case operation', can omit each puts, then at last puts output which contains a message/calculation result!
