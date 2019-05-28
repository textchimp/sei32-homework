console.log('GA ATM App');

// Keep track of the checking and savings balances somewhere
// store values in checking and savings account

const bank = {
  'accounts': {
    'savings': 5,
    'checkings': 2,
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

    let newBalance = this.accounts[pickAccount] -= amount;

    if (newBalance >= 0){
      return newBalance;
    // } else if (amount <= beforeTotalBalance) {
    //  console.log('Perhaps I can deal with this')
//****** you are here - test if this will work in the browser without return in it
      // this.accounts[pickAccount] = 0.00;


    } else {
    // this means newBalance cannot be negative
      return this.accounts[pickAccount] += amount;
    }
  },

  // Add functionality so that a user can withdraw money from one of the bank accounts.
  deposit: function(pickAccount, amount){
    let newBalance = this.accounts[pickAccount] += amount;
    return newBalance;

    // this.printBalance(pickAccount);
  }

};// end of bank object


// What happens when the user wants to withdraw more money from the checking account than is in the account? These accounts have overdraft protection, so if a withdrawal can be covered by the balances in both accounts, take the checking balance down to $0 and take the rest of the withdrawal from the savings account. If the withdrawal amount is more than the combined account balance, ignore it.


// Make sure there is overdraft protection going both ways.



// display initial balance

$('#balance1').html(`$${bank.accounts.checkings.toFixed(2)}`);
$('#balance2').html(`$${bank.accounts.savings.toFixed(2)}`);

// initial colour of the accounts
if(bank.accounts.checkings === 0.00){
  $('#balance1').css('backgroundColor','red');
} else {
  $('#balance1').css('backgroundColor','#E3E3E3');
};

if(bank.accounts.savings === 0.00){
  $('#balance2').css('backgroundColor','red');
} else {
  $('#balance2').css('backgroundColor','#E3E3E3');
};


// change colour of checkings account
const colour = function(newTotal){
  if(newTotal === 0.00){
    $('#balance1').css('backgroundColor','red');
  } else {
    $('#balance1').css('backgroundColor','#E3E3E3');
  }
};

// change colour of checkings account
const colour2 = function(newTotal){
  if(newTotal === 0.00){
    $('#balance2').css('backgroundColor','red');
  } else {
    $('#balance2').css('backgroundColor','#E3E3E3');
  }
};


// checking deposit
$('#checkingDeposit').on('click', function(){

  //get amount from input box
  let amount = parseFloat( $('#checkingAmount').val() );
//find new total
  let newTotal =  bank.deposit('checkings', amount);
// change checkings balance
  $('#balance1').html(`$${newTotal.toFixed(2)}`);

// change background from red to grey if > 0.00
  colour(newTotal);

});

//checking withdraw
$('#checkingWithdraw').on('click', function(){

  //get amount from input box
  let amount = parseFloat( $('#checkingAmount').val() );
//find new total
  let newTotal =  bank.withdraw('checkings', amount);
// change checkings balance
  $('#balance1').html(`$${newTotal.toFixed(2)}`);

  // change background to red if checking balance is equal to $0.00
  colour(newTotal);


});

//savings deposit
$('#savingsDeposit').on('click', function(){

  //get amount from input box
  let amount = parseFloat( $('#savingsAmount').val() );
//find new total
  let newTotal =  bank.deposit('savings', amount);
// change Savings balance
  $('#balance2').html(`$${newTotal.toFixed(2)}`);

  colour2(newTotal);

});


//savings withdraw
$('#savingsWithdraw').on('click', function(){

  //get amount from input box
  let amount = parseFloat( $('#savingsAmount').val() );
//find new total
  let newTotal =  bank.withdraw('savings', amount);
// change savings balance
  $('#balance2').html(`$${newTotal.toFixed(2)}`);

// if savings total = $0.00 then change the background colour to red
  colour2(newTotal);

});


















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
