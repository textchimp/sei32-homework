
// Rectangle

const rectangle = {
  length: 4,
  width: 4
};

const isSquare = function(recq) {
  const rectangle = recq;
  if ( rectangle.length == rectangle.width) {
    console.log("It's a square");
  } else {
    console.log("Not a square");
  }
};

const area = function(recq) {
  const rectangle = recq;
  return `Area of rectangle ${rectangle.length * rectangle.width}`
};

const perimeter = function(recq) {
  const rectangle = recq;
  return `Perimeter is: ${(rectangle.length * 2) + (rectangle.width * 2)}`
};


// Cash Register

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

let tillTotal = 0;
const cashRegister = function(shoppingCart) {
    // take the value

    for (let key in shoppingCart) {
      tillTotal += parseFloat(shoppingCart[key])
    };
    return tillTotal;
} // end of function

// JavaScript Bank

const bank = [
  {accountName: "Josh", accountBalance: 700},
  {accountName: "Alex", accountBalance: 45},
  {accountName: "Stacey", accountBalance: 100000}
];

// Function to find total amount of funds in bank
const totalFunds = function(bank) {
  let marketCap = 0
  // accesses the account balance and sums
  for (let key in bank) {
    marketCap += (bank[key].accountBalance);
  }
  return `Total funds in bank: $${marketCap}`;
}; // End of function

// Adds a new account
const addAccount = function(bank, name, balance) {
    bank.push({accountName: name, accountBalance: balance});
    return bank;
}; // end of function

const bankBranch = function(bank, name, funds) {

    for (let key in bank) {
      //console.log(bank[key].accountName);
      //console.log(bank[key].accountBalance);
      if (bank[key].accountName === name) {
        bank[key].accountBalance += funds;
      }
    }
};
