#User is given a menu of operations
puts "Please select which option you would like to use:\n1. Addition +\n2. Subtraction -\n3. Multiplication *\n4. Division \n5. Exponents\n6. Square Root\n7. Mortgage Calculator"
user_option = gets.chomp.to_i

puts "Please enter the first number of the equation"
number_1 = gets.chomp.to_i

puts "Please enter the second number of the equation"
number_2 = gets.chomp.to_i

#function / method
def mortgageCalculator(p, i, n)
  #m = p*(i*(1+i)**n)/(1-(1+i)**n)
  p1 = i*(1+i)**n
  p2 = 1-(1+i)**n
  p3 = p1 / p2
  m1 = (p * p3).abs.round(2)
  m1
end


case user_option
when 1
  puts "#{number_1} + #{number_2} = #{number_1 + number_2}"
when 2
  puts "#{number_1} - #{number_2} = #{number_1 - number_2}"
when 3
  puts "#{number_1} x #{number_2} = #{number_1 * number_2}"
when 4
  puts "#{number_1} / #{number_2} = #{number_1 / number_2}"
when 5
  puts "#{number_1} Exponent of  #{number_2} = #{number_1 ** number_2}"
when 6
  puts "The square root of #{number_1} is #{Integer.sqrt(number_1)} and\nThe square root of #{number_2} is #{Integer.sqrt(number_2)}"
when 7
  puts "What is your principle amount"
  p = gets.chomp.to_i
  puts "What is your interest rate p.a. e.g. 5 = 5% "
  r = gets.chomp.to_f / 100 / 12
  puts "How many years do you have the loan for?"
  n = gets.chomp.to_i * 12
  monthly_repayments = mortgageCalculator(p, r, n)
  puts "Your monthly repayments on your mortgage is: $  #{monthly_repayments}"
else
  puts "you did not select a valid option"
end
