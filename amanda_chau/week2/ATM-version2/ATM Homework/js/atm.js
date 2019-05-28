console.log('GA ATM App');

// Keep track of the checking and savings balances somewhere
// store values in checking and savings account

const bank = {
  'accounts': {
    'savings': 2000,
    'checkings': 100,
  },// end of accounts
  // find key within accounts and print balance of either savings or checkings
  // use . or [] to access keys within objects [''] required if you want to pass it through a function
  printBalance: function(pickAccount){
    console.log(pickAccount, 'total:', this.accounts[pickAccount]);
  },
  // Add functionality so that a user can deposit money into one of the bank accounts.
  // find account and subtract amount
  withdraw: function(pickAccount, amount){
    let beforeTotalBalance = this.accounts.savings + this.accounts.checkings;

    let newBalance = (this.accounts[pickAccount] - amount);


    if (newBalance >= 0.00){
      this.accounts[pickAccount] -= amount;

    } else if (amount <= beforeTotalBalance) {
    //  This allows for overdraft
      let secondAccount = this.otherAccount(pickAccount);
      let remainingAmount = (amount - this.accounts[pickAccount]);

      this.accounts[secondAccount] -= remainingAmount;

      this.accounts[pickAccount] = 0.00;


    } else {
    // if overdraft is not possible
      this.accounts[pickAccount]; // can delete, does nothing
    }
  },

  // Add functionality so that a user can withdraw money from one of the bank accounts.
  deposit: function(pickAccount, amount){
    // let newBalance =
    this.accounts[pickAccount] += amount;
    // return newBalance;

    // this.printBalance(pickAccount);
  },
  // if else statement to find other account
  otherAccount: function (pickAccount){
    if (this.accounts[pickAccount] === this.accounts.savings){
      return 'checkings'
    } else {
      return 'savings'
    }
  },

};// end of bank object


// What happens when the user wants to withdraw more money from the checking account than is in the account? These accounts have overdraft protection, so if a withdrawal can be covered by the balances in both accounts, take the checking balance down to $0 and take the rest of the withdrawal from the savings account. If the withdrawal amount is more than the combined account balance, ignore it.


// Make sure there is overdraft protection going both ways.



// display initial balance

$('#balance1').html(`$${bank.accounts.checkings.toFixed(2)}`);
$('#balance2').html(`$${bank.accounts.savings.toFixed(2)}`);

// initial colour of the accounts
const colour = function(){
  if(bank.accounts.checkings === 0.00){
    $('#balance1').css('backgroundColor','red');
  } else {
    $('#balance1').css('backgroundColor','#E3E3E3');
  }
};

colour();

const colour2 = function(){
  if(bank.accounts.savings === 0.00){
    $('#balance2').css('backgroundColor','red');
  } else {
    $('#balance2').css('backgroundColor','#E3E3E3');
  }
};

colour2();




// checking deposit
$('#checkingDeposit').on('click', function(){

  //get amount from input box
  let amount = parseFloat( $('#checkingAmount').val() );
//find new total
   bank.deposit('checkings', amount);
// change checkings balance
  $('#balance1').html(`$${bank.accounts.checkings.toFixed(2)}`);

  colour();

});

//checking withdraw
$('#checkingWithdraw').on('click', function(){

  //get amount from input box
  let amount = parseFloat( $('#checkingAmount').val() );
//find new total
  bank.withdraw('checkings', amount);
// change checkings balance
  $('#balance1').html(`$${bank.accounts.checkings.toFixed(2)}`); //put in update UI function OR can also use an array to store new balance

  $('#balance2').html(`$${bank.accounts.savings.toFixed(2)}`);

  // change background to red if checking balance is equal to $0.00
  colour();
  colour2();


});

//savings deposit
$('#savingsDeposit').on('click', function(){

  //get amount from input box
  let amount = parseFloat( $('#savingsAmount').val() );
//find new total
  bank.deposit('savings', amount);
// change Savings balance
  $('#balance2').html(`$${bank.accounts.savings.toFixed(2)}`);

  colour2();

});


//savings withdraw
$('#savingsWithdraw').on('click', function(){

  //get amount from input box
  let amount = parseFloat( $('#savingsAmount').val() );
//find new total
  bank.withdraw('savings', amount);
// change savings balance
  $('#balance2').html(`$${bank.accounts.savings.toFixed(2)}`);

  $('#balance1').html(`$${bank.accounts.checkings.toFixed(2)}`);

  colour();
  colour2();

});





//input type = number (accepts number values only)
//can try making this in vue












// Object.keys(a).map(function(key){return a[key]},)


// Summary
// This lab will help you practice JavaScript functions and manipulating the DOM with jQuery.
// You'll be selecting elements, manipulating HTML, and manipulating style along with building out the logic using JavaScript.
// Objectives:
// DOM selection, appending, removal, updating
// code organisation: separation of concerns, i.e. display logic vs. business logic
// Specification:







// What happens when the user wants to withdraw more money from the checking account than is in the account? These accounts have overdraft protection, so if a withdrawal can be covered by the balances in both accounts, take the checking balance down to $0 and take the rest of the withdrawal from the savings account. If the withdrawal amount is more than the combined account balance, ignore it.
// Make sure there is overdraft protection going both ways.
// Are there ways to refactor your code to make it DRYer?
// Separation of Concerns
// Spend some time thinking about the following before you even start writing code: can you separate
//
// the GUI code (event handlers for form input or buttons)
// from
//
// the banking code (deposit and withdrawal between accounts, checking for overdraft etc)
// as much as possible?
//
// Ideally you would be able to test all the banking functions from the console, and then connect them to the GUI code with the minimum amount of overlap or points of contact.
//
// These two parts of the system (display logic and business logic) should know as little as possible about each other.
