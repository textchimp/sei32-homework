# Calculate the body mass index (BMI) for an individual, given their height and weight


want_to_quit = false

until want_to_quit == true
  print "type in the number of functionality you want to use:
  \n1) arithmetical calculator
  \n2) BMI calculator
  \n3) quit: "

  functionality = gets.chomp

  def arithmeticalCalculator
    print "choose the calculation to perform: +, -, *, /, **, √ , or quit: "

    operation = gets.chomp # puts operation.class -string

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

  def bmiCalculator (weight, height)
    bmi = (weight/(height/100)**2).to_i
  end

  case functionality

  when "1" then arithmeticalCalculator



  when "2"
    bmi = 0
    print "type in your height(cm): "
    height = gets.to_f
    print "type in your weight(kg): "
    weight = gets.to_f
    puts bmiCalculator(weight, height)






  end

  when "3" then want_to_quit = true
end



## POINTS
#google ruby multi line puts symbol! instead of \n or each line puts:
#can use color!! puts .green etc
#prompt can be used
#last line of method is the return value / expression!

# 0..7 only for case - when???
