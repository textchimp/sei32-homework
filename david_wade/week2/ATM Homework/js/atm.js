
// Keep track of the checking and savings balances somewhere
const balance = {
  checking: 100,
  savings: 50,
};

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
    return (balance.checking) + (balance.savings);
  };

  //takes value amount requested to be withdrawn and asks whether or not the total balance is sufficient to make transation.
  const overdraw = function(id) {
    if ( parseInt( $(id).val() ) >  totalFunds() ) {
      return true;
  } else {
      return false;
  };
};


  //if checkingAmount > #balance1, check to see if #balance2 has remainder if not, no withdrawl for you!....next!

  //subtract funds from savings and transfer to checking
  //total of #balance2
  console.log(`Balance of savings : $${balance.savings}`);
  //reasigning value of balance[key]
  // balance.checking = 150;
  // balance.savings -= 50;
  // const totalBalance = balance.checking + balance.savings;
  // let negBal = totalBalance - balance.checking;



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
  if ( overdraw('#checkingAmount') === true){
    return;
  };
  const amount = parseInt( $('#checkingAmount').val() );

  withdrawl('checking', amount);
  $('#balance1').html('$' + balance.checking);
  negFunds('checking');
});//end of checkWithdrawl

//savings deposit function
$('#savingsDeposit').on('click', function(){

  const amount = parseInt( $('#savingsAmount').val() );

  deposit('savings', amount);
  $('#balance2').html('$' + balance.savings);


});

$('#savingsWithdraw').on('click', function(){
  if ( overdraw('#savingsAmount') === true ){
    return;
  };
  const amount = parseInt( $('#savingsAmount').val() );

  withdrawl('savings', amount);
  $('#balance2').html('$' + balance.savings);
  negFunds('savings');
});



















}); //document ends here
