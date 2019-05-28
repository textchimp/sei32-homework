$(document).ready(function() {


$theRules = $(".theRules")

const theRules = function() {
    $theRules.animate({
      left: "1000"
    });

window.setInterval(theRules, 1000);
};
