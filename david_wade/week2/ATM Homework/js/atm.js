$(document).ready(function() {

// // Keep track of the checking and savings balances somewhere
// const $checkingBalance = $("#balance1").html();
// const $savingsBalance = $("#balance2").html();
//
// // Add functionality so that a user can deposit money into one of the bank accounts.
//  const checkingBalance = function(){
//   return checkingBalance += $("#checkingAmount").attr("placeholder");
//
// };
//
// // Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
//
//
//
//
//

// Keep track of the checking and savings balances somewhere
const balance = {
  checking: '100',
  savings: '50'
};

//const var for acessing balance object checking key
const checkingBalance = balance.checking;
//const var for accessing balance object savings key
const savingsBalance = balance.savings;

// Add functionality so that a user can deposit money into one of the bank accounts.

const deposit = function (checkOrSavings, depositAmount) {
  let sum = balance.account[checkOrSavings] += depositAmount;
  return sum;
};

// Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.

//displays balance const in $('#balance1') and $('#balance2') node

$('#balance1').append(balance.checking);
$('#balance2').append(balance.savings);

// Add functionality so that a user can withdraw money from one of the bank accounts

const withdrawl = function (checkOrSavings, withdrawlAmount) {
  let sum = balance.checkOrSavings -= withdrawlAmount;
  return sum;

};



//selects checking input placeholder box
const checkingMinusFunds = $('#balance1[placeholder="enter an amount"]');

//selects checking input placeholder text
checkingMinusFunds.innerHTML






















}); //document ends here
