class Calculator
  def initialize question
    @question = question
    matches
  end

  def matches
    @matches = @question.match(/(-?\d+) (plus|minus|multiplied by|divided by) (-?\d+)/)
  end

  def first_int
    @matches[1].to_i
  end

  def operator
    case @matches[2]
    when "plus" then :+
    when "minus" then :-
    when "multiplied by" then :*
    when "divided by" then :/
    end
  end

  def second_int
    @matches[3].to_i
  end

  def answer
    @answer = first_int.send(operator, second_int)
  end
end

c = Calculator.new("What is 5 plus 13?")
d = Calculator.new("What is -6 multiplied by 4?")

puts c.answer
puts d.answer
