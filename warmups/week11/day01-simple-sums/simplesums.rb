class SimpleSums
  def initialize(number)
    @number = number
  end

  def print_number
    "Number of steps is #{@number}"
  end

  def s1
    "s1 evaluates to #{@number % 2}"
  end

  def s2
    # calculate the addition from from 1 to n
    # could do it this way  - (@number*(@number + 1))/2
    "s2 evaluates to #{(1..@number).sum}"
  end

end

sum = SimpleSums.new(5)

p sum.print_number

p sum.s1

p sum.s2
