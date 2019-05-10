console.log('Geometry Function Lab, Part 1, Rectangle');
// Geometry Function Lab
// Part 1, Rectangle
// Given a rectangle object like the one below, write the following functions:
//
// isSquare(rect) - Returns whether the rectangle is a square or not
// area(rect) - Returns the area of the rectangle
// perimeter(rect) - Returns the perimeter of the rectangle
// const rectangle = {
//   length: 4,
//   width: 4
// };
// In other words, these functions should take as their only argument a single object with the same keys (length, width) as the rectangle object above, and use that object to make the calculations.
//
console.log(`1, If it's a square`);

const rectangle = {
  length: 4,
  width: 5
}

function isSquare(rect) {
  if (rect.length === rect.width) {
    return (`This is a square!`);
  }

  return(`This is not a square!`);
};

console.log(isSquare(rectangle));

//

console.log(`2, What's the area?`);

function area(rect) {
  return rect.length * rect.width;
}

console.log(area(rectangle));

//

console.log(`3, Perimeter`);

function perimeter (rect){
  return (rect.length + rect.width) * 2;
}

console.log(perimeter(rectangle));



// Part 2, Triangle
// Given a triangle object like the one below, write the following functions:
//
// isEquilateral(tri) - Returns whether the triangle is equilateral or not
// isIsosceles(tri) - Returns whether the triangle is isosceles or not
// area(tri) - Returns the area of the Triangle
// isObtuse(tri) - Returns whether the triangle is obtuse or not
// const triangle = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };
// As above, these functions should take a single object as an argument, which will have the same keys as the triangle above, and which you will use for your calcuations.

const triangle = {
  sideA: 6,
  sideB: 10,
  sideC: 6
};

console.log(`1, If it's equilateral`);

function equilateral(tri) {
  if (tri.sideA === tri.sideB && tri.sideA === tri.sideC) {
    return `This triangle is quilateral.`
  }
  return `This triangle is not quilateral.`
}

console.log(equilateral(triangle));

//
//

console.log(`2, if it's isosceles`);

function isosceles(tri) {
  if (tri.sideA === tri.sideB || tri.sideA === tri.sideC || tri.sideB === tri.sideC){
    return `This triangle is isosceles.`
  }
  return `This triangle is not isosceles.`
}

console.log(isosceles(triangle));

//
//

console.log(`3, area`);

function area(tri) {
  const a = tri.sideA;
  const b = tri.sideB;
  const c = tri.sideC;
  const p = (a + b + c) / 2;
  return (p * (p - a) * (p - b) * (p - c)) ** 0.5;
}

console.log(area(triangle).toFixed(2));

//
//

console.log(`4, if it's obtuse`);


function isObtuse(tri) {
  const triSideArray = Object.values(tri);
  triSideArray.sort(function(a,b){return a-b});

  if ((triSideArray[0] ** 2 + triSideArray[1] ** 2) < triSideArray[2] ** 2) {
    return `This triangle is obtuse.`
  }
return `This triangle is not obtuse.`
}

console.log(isObtuse(triangle));




// The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
//
// // Input
// const cartForParty = {
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };
//
// // Output
// cashRegister(cartForParty)); // 60.55

console.log(`5, The Cash Register`);
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};


const cashRegister = function(list) {
  let total = 0;
  for(const key in list) {
    total += Number(list[key]);
  }
  return total;
}
console.log(cashRegister(cartForParty));



//
// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
//
// Bank
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//
// Tips
// Don't overthink this. Shorter code is probably the answer.
//
// Bonus
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
// Additional
// Begin exploring the JavaScript Koans. Fork, clone and start trying them.



console.log('JavaScript Bank');


const jsBank = [
  {owner: 'Amanda',
  balance: 100000
  },
  {owner: 'Clara',
  balance: 23000
  },
  {owner: 'Viola',
  balance: 27000
  },
];

//add new accounts
const addAccount = function(acctName, initBalance) {
  jsBank[jsBank.length] = {owner:acctName , balance:initBalance}; // .push method!!!!
  return `You've created a new account with accountName of '${acctName}' with balance of $${initBalance}.`
};

console.log(addAccount('Josh', 30000));



//show total balance
const sumBalance = function(jsBank) {
  let totalBalance = 0;
  for (let i = 0; i < jsBank.length; i++) {
    totalBalance += jsBank[i]['balance'];//.balance is better!
  };
  return `Total balance: ${totalBalance}`;
};

console.log(sumBalance(jsBank));



//depoist or withdrawals & show new balance
const changeBalance = function (accName,changeAmount){
  let accountFound = false;
  for (let i = 0; i < jsBank.length; i++) {
    let account = jsBank[i];
    if (account.owner === accName) {
      account.balance += changeAmount;
      console.log(`The balance of ${account.owner}'s account is now ${account.balance}.`)
      console.log(`Total balance: ${sumBalance(jsBank)}`);
      accountFound = true;
    }
  }
  if (!accountFound){
    console.log(`Your account doesn't exist.`);
  }
}; // at the end of declaring a function, use ; means end of declaration of a variable


changeBalance('Viola',-5000);




// refactor

const bank = {
accounts : [
  {name: , balance: },
  {name: , balance: },
  {name: , balance: },
],
addAccount: function(),



}
