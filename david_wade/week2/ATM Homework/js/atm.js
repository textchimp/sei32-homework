
// Keep track of the checking and savings balances somewhere
const balance = {
  checking: 100,
  savings: 50,
};

let checkingAmount = parseInt( $('#checkingAmount').val() );

const negFunds = function (account){
  if (balance[account] > 0 ) {
    return ;
  }
  else {
    $('.balance').css('background-color', 'red');
  }
};


$(document).ready(function() {

  //displays balance const in $('#balance1') and $('#balance2') node
  $('#balance1').html('$' + balance.checking);
  $('#balance2').html('$' + balance.savings);

  //sum of both accounts
  const totalFunds = function(){
  (balance.checking) + (balance.savings);
  };

  //is total amount greater than withdrawl
  const overdraw = function(){
      console.log(checkingAmount);
      if ( totalFunds() <= checkingAmount ) {
        console.log('no funds');
      };

  };


//deposit function
const deposit = function (checkOrSavings, depositAmount) {
  balance[checkOrSavings] += depositAmount;
  return  balance[checkOrSavings];
};



//withdrawl function
const withdrawl = function (checkOrSavings, withdrawlAmount) {
  let sum = balance[checkOrSavings] -= withdrawlAmount;
  return sum;

};


//checking deposit function
$('#checkingDeposit').on('click', function(){
  const amount = parseInt( $('#checkingAmount').val() );
  // console.log(amount);
  deposit('checking', amount);
  $('#balance1').html('$' + balance.checking);



});//checkingDeposit function ends here

//checking withdrawl function
$('#checkingWithdraw').on('click', function(){
  const amount = parseInt( $('#checkingAmount').val() );

  withdrawl('checking', amount);
  $('#balance1').html('$' + balance.checking);
  negFunds('checking');
  overdraw();
});//end of checkWithdrawl

//savings deposit function
$('#savingsDeposit').on('click', function(){
  const amount = parseInt( $('#savingsAmount').val() );

  deposit('savings', amount);
  $('#balance2').html('$' + balance.savings);


});

$('#savingsWithdraw').on('click', function(){
  const amount = parseInt( $('#savingsAmount').val() );

  withdrawl('savings', amount);
  $('#balance2').html('$' + balance.savings);
  negFunds('savings');
  overdraw();
});


















}); //document ends here
