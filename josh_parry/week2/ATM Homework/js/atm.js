// Global Variables

let tempCheckingAcct = [];
let checkingAcctGlobal = 0;
let savingsAcctGlobal = 0;


// ####### Checking Account

// CHECKING - Event listener to pick up what was pressed
$('#checkingAmount').on("keypress", function(e) {
  const keystrokeNumber = e.which;
  const keyStroke = parseInt(String.fromCharCode(keystrokeNumber));
  tempCheckingAcct.push(keyStroke);
}); // of CheckingForm

// Function to sum an temp checking array
let sum = function() {
  let sum = tempCheckingAcct.reduce(function(a, b) { return a + b; }, 0);
  return sum
}

//Deposit
// When button pressed add to amount to temp account
//Manipulate the Checking account text
$('#checkingDeposit').on('click', function() {
  let depositAmount = parseInt(tempCheckingAcct.join(''));
  checkingAcctGlobal += depositAmount;
  $('#balance1').text('$' + checkingAcctGlobal);
  tempCheckingAcct = [];
})

// Withdraw
// If insufficient checks if overdraft funds in other account
$('#checkingWithdraw').on('click', function() {
  let withdrawAmount = parseInt(tempCheckingAcct.join(''));
  if (withdrawAmount < checkingAcctGlobal) {
      checkingAcctGlobal -= withdrawAmount;
      $('#balance1').text('$' + checkingAcctGlobal);
} else {
    if (withdrawAmount <= (checkingAcctGlobal + savingsAcctGlobal)) {
      savingsAcctGlobal = (savingsAcctGlobal - (withdrawAmount - checkingAcctGlobal))
      checkingAcctGlobal =  0;
      $('#balance2').text('$' + savingsAcctGlobal);
      $('#balance1').text('$' + checkingAcctGlobal);
    } else {
      alert("You have insufficient funds")
    }
}
  tempCheckingAcct = [];
})

// ###### SAVINGS ## //


//Event listener to see what typed into form
$('#savingsAmount').on("keypress", function(e) {
  const savKeystrokeNumber = e.which;
  const savKeyStroke = parseInt(String.fromCharCode(savKeystrokeNumber));
  tempCheckingAcct.push(savKeyStroke);
}); // of CheckingForm


// Deposit
$('#savingsDeposit').on('click', function() {
  let savDepositAmount = parseInt(tempCheckingAcct.join(''));
  savingsAcctGlobal += savDepositAmount;
  $('#balance2').text('$' + savingsAcctGlobal);
  tempCheckingAcct = [];
})

// Withdraw
$('#savingsWithdraw').on('click', function() {
  let savWithdrawAmount = parseInt(tempCheckingAcct.join(''));
  if ( savWithdrawAmount < savingsAcctGlobal ) {
    savingsAcctGlobal -= savWithdrawAmount;
    $('#balance2').text('$' + savingsAcctGlobal);
} else {
  if ( savWithdrawAmount < (savingsAcctGlobal + checkingAcctGlobal)) {
    console.log(`checkingAcctGlobal ${checkingAcctGlobal}, savWithdrawAmount ${savWithdrawAmount}, savingsAcctGlobal ${savingsAcctGlobal} `);
    checkingAcctGlobal = (checkingAcctGlobal - (savWithdrawAmount - savingsAcctGlobal))

    savingsAcctGlobal =  0;
    $('#balance2').text('$' + savingsAcctGlobal);
    $('#balance1').text('$' + checkingAcctGlobal);
  } else {
    alert("You have insufficient funds")
  }
}
  tempCheckingAcct = [];
})


// Checks balance every 1 second - if zero goes red
window.setInterval(function() {

  if (checkingAcctGlobal <= 0 && savingsAcctGlobal <=0) {
    $(document.body).css({'background-color': 'red'});
  } else {
    $(document.body).css({'background-color': 'gray'});
  }
}, 1000);


/// ## EXTRA ## ///

// Transfers money from Checking to Savings
$('#transferAccount').on('click', function() {
  const transferQuery = prompt('How much would you like to transfer to savings?')
  if (transferQuery > checkingAcctGlobal) {
    alert("Not enough funds, better keep studying software engineering")
  } else {
    checkingAcctGlobal =  checkingAcctGlobal - parseInt(transferQuery);
    savingsAcctGlobal = savingsAcctGlobal + parseInt(transferQuery);
    $('#balance2').text('$' + savingsAcctGlobal);
    $('#balance1').text('$' + checkingAcctGlobal);
  }
  // how much would you like to transfer sir
});

const randColor = function() {
  const colors = ['yellow', 'red', 'black', 'blue'];
  const arrayNumber =  Math.floor(Math.random()*4);
  return colors[arrayNumber];
}


// Your bank account has been hacked
$('#bigRedButton').on('click', function() {
  window.setInterval(function() {
    $(document.body).css({'background-color': randColor()});
    $('.account h1').text('HACKED')
    $('#balance2').text(Math.floor(Math.random()*100000));
    $('#balance1').text(Math.floor(Math.random()*100000));
  }, 100)
})// End of Hack


// numbers spinning

//text on screen
