// Part 1

const squareNumber = function (number) {
  return `The result of squaring ${number} is ${number**2}`
}

const halfNumber = function (number) {
  return `The result of squaring ${number} is ${number/2}`
}

const percentOfThat = function(firstNumber, secondNumber) {
  return `${firstNumber} is ${firstNumber/secondNumber * 100}% of ${secondNumber}`
}

const areaOfCircle = function (radius) {
  return `Area of this circle is ${(Math.PI*(radius**2)).toFixed(2)}`
}

//Part 2

const part2 = function( numberP2 ) {
  const half = numberP2 / 2;
  const square = half ** 2;
  const circleArea = Math.PI*(square**2);
  const percentage = (circleArea / (circleArea**2)) * 100

  return `From the inputed number ${numberP2} half is ${half} squared is ${square} the circle area is ${circleArea} and the percentage is ${percentage}`
}

// STRINGS

// Dr EVil

const drEvil = function(amount) {

  if (amount === 1000000) {
    return `${amount} dollars (pinky)`
  } else {
    return `${amount} dollars`
  }
}

//Mix Up

const mixUp = function(firstWord, secondWord) {

  return `${secondWord.substring(0,2)}${firstWord.substring(2)} ${firstWord.substring(0,2)}${secondWord.substring(2)}`
}



  //FixStart

/*
  var sRegExInput = new RegExp(subject, “g”);
 main_str = main_str.replace(sRegExInput ,’JAVA’);
*/

const fixStart = function(string) {

  const firstLetter = string.substring(0,1)
  const sRegExInput = new RegExp(firstLetter, "g");

  const secondHalf = string.substring(1);
  const replacedLetters = secondHalf.replace(sRegExInput, "*")

  return `${firstLetter}${replacedLetters}`

};

// Verbing

//const myChar = hello1[hello1.length-1];

const verbing = function(string) {

    const findStringLength = string.length;
    console.log(findStringLength)

      if (findStringLength >= 3) {
        const lastThreeLetter = string.substring(findStringLength - 3)
        console.log(lastThreeLetter)

          if (lastThreeLetter == 'ing') {
            return string += 'ly';
          } else {
            return string += 'ing'
          }
    } else {
      return string
    }
  }


// Not Bad

const notBad = function (string) {

    const containNotBad = string.includes("not");

    if (containNotBad == true) {
      const positionOfNot = string.search("not");
      const positionOfBad = string.search("bad");

      return string.substr(0, positionOfNot) + string.substr(positionOfBad+4) + "good!";

    } else {
      return string
    }
}



// WARMUP

const warmUp = function(number) {

  if( number % 3 === 0 || number % 5 === 0 || number % 7 === 0  ){
    let numberReturn = ""
    if (number % 3 === 0) {
      numberReturn += "Pling";
    }
    if (number % 5 === 0) {
        numberReturn += "Plang";
      }
      if (number % 7 === 0) {
          numberReturn += "Plong"
        }

        return numberReturn

  } else {
    return number;
  }
}; // end of warmUp()


// Luke's solution // Refactoring Code

const isAFactor = function(num, divisor) {
  return num % divisor === 0;

};
// not sure if works
const warmUpRefact = function(number) {

  if( isAFactor(number, 3) || isAFactor(number, 5) || isAFactor(number, 7) ){
    let numberReturn = ""
    if (isAFactor(number, 3)) {
      numberReturn += "Pling";
    }
    if (isAFactor(number, 5)) {
        numberReturn += "Plang";
      }
      if (isAFactor(number, 7)) {
          numberReturn += "Plong"
        }

        return numberReturn

  } else {
    return number;
  }
}; // end of warmUp()
