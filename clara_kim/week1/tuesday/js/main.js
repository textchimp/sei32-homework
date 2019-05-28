// The Calculator

// Part 1
// a) Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// b) Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// c) Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// d) Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.


// a

function squareNumber(number) {
  const squared = number**2
  console.log(`The result of squaring the number ${number} is ${squared}.`);
};

squareNumber(8);

// b

function halfNumber(number) {
  const halved = number / 2
  console.log(`Half of ${number} is ${halved}.`);
};

halfNumber(3);

// c

function percentOf(numberOne, numberTwo) {
  const percent = (numberOne / numberTwo)*100
  console.log(`${numberOne} is ${percent}% of ${numberTwo}.`);
};

percentOf(18,50);

// d

function areaOfCircle(radius) {
  const area = Math.PI*(radius**2)
  console.log(`The area for a circle with radius ${radius} units is ${area.toFixed(2)} units squared. (2dp)`);
};

areaOfCircle(8);
