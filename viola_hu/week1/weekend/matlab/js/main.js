console.log(`Weekend Homework : MTA lab`);

// start from one line

const lineN = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];

//count total stops
function totalStops(startStop, endStop) {
  const startIndex = lineN.indexOf(startStop);
  const endIndex = lineN.indexOf(endStop);
  const unionIndex = lineN.indexOf('Union Square');
  //Union Square is the interchange stop, make it fixed
  //Union Square's index is 4

  //separate the line into two parts using Union as a pause
  const startToUnionStops = Math.abs(unionIndex - startIndex);
  const unionToEndStops = Math.abs(endIndex - unionIndex);
  const totalStops = startToUnionStops + unionToEndStops + 1;

  console.log(`${totalStops} stops in total.`);
}

totalStops('Times Square', '8th');
totalStops('Times Square', 'th');
totalStops('Times Square', '8th');
totalStops('Times Square', '8th');


const lineN = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
const reverseLineN = lineN.reverse();

const unionIndex = lineN.indexOf('Union Square');
const unionReverseIndex = reverseLineN.indexOf('Union Square');

// whether need to interchange/pass union.
function interchangeOrNot(startStop, endStop){
  const startIndex = lineN.indexOf(startStop);
  const endIndex = lineN.indexOf(endStop);
  if ((startIndex < unionIndex && endIndex <= unionIndex) || (startIndex >= unionIndex && endIndex > unionIndex)) {
    console.log(`no need to interchange`);
    console.log(printOutStops(startStop,endStop));
  } else {
    console.log(`interchange at union`);
  }
}

interchangeOrNot('Times Square','23rd');
interchangeOrNot('23rd','Union Square');
interchangeOrNot('Union Square','8th');
interchangeOrNot('23rd','8th');

// no need to interchange, print out stop names


const lineN = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
const reverseLineN = lineN.slice().reverse();
// console.log(lineN);
// console.log(reverseLineN);
// [ '8th', 'Union Square', '23rd', '28th', '34th', 'Times Square' ]

function printOutStops (startStop, endStop){
  const startIndex = lineN.indexOf(startStop);
  const endIndex = lineN.indexOf(endStop);
  // console.log(startIndex);
  // console.log(endIndex);
  const reverseStartIndex = reverseLineN.indexOf(endStop);
  const reverseEndIndex = reverseLineN.indexOf(startStop);

  if (startIndex < endIndex){
    return lineN.slice(startIndex + 1, endIndex + 1).join(', ');
  } else {
    return reverseLineN.slice(reverseStartIndex + 1, reverseEndIndex + 1 ).join(', ');
  }



};

console.log(printOutStops('34th','Union Square'));

console.log(printOutStops('23rd','Times Square'));

console.log(printOutStops('Union Square','8th'));



/*
1, pass union or not,
1)no need to pass union

no need to consider union,
- print out all the stops
- no need to change
- total stops

2) needs to pass union

- separate into 2 parts,
- print out first part
- pop up change at union
- print out second part
- concatenate the two part together and print all stops

*/


//REDO
//Step 1, try one line!
//test:
// const howManyStops = function(startStop, endStop) {
//   //** Math.abs makes it applicable for both directions!!!
//   const numberOfStops = Math.abs(lineN.indexOf(startStop) - lineN.indexOf(endStop));
//   return numberOfStops;
// }
//test:
// const printOutStops = function(startStop, endStop) {
//   if (lineN.indexOf(startStop) < lineN.indexOf(endStop)) {
//     return lineN.slice(lineN.indexOf(startStop) + 1, lineN.indexOf(endStop) + 1).join(', ');
//   } else {
//     return (lineN.slice(lineN.indexOf(endStop), lineN.indexOf(startStop)).reverse().join(', '));
//   }
// };

const lineN = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];

const oneLineTrip = function (line, startStop, endStop) {
  const startIndex = lineN.indexOf(startStop);
  const endIndex = lineN.indexOf(endStop);

  if (startIndex < endIndex) {
    console.log(`You must travel through the following stops on the ${line}: ${lineN.slice(startIndex + 1, endIndex + 1).join(', ')}.`);
  } else {
    console.log(`You must travel through the following stops on the ${line}: ${lineN.slice(endIndex, startIndex).reverse().join(', ')}.`);
  }

  console.log(`${Math.abs(startIndex - endIndex)} stops in total.`);

}

oneLineTrip('lineN','34th','Union Square');
oneLineTrip('lineN','23rd','Times Square');
oneLineTrip('lineN','8th','34th');







//Step 2, try three lines!

const lineN = ['Times Square', '34th', 'N28th', 'N23rd', 'Union Square', 'N8th'];
const lineL = ['8th', '6th', 'Union Square', '3rd', '1st'];
const line6 = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];

// as passengers' input is a string, need to make it to according line array.
const whichLine = function(lineString){
  if((lineString) === 'lineN') {
    return lineN;
  }
  if ((lineString) === 'lineL'){
    return lineL;
  }
  if ((lineString) === 'line6'){
    return line6;
  }
};


const planTrip = function(getOnLine, startStop, getOffLine, endStop) {
  // set up some frequently used variables at the beginning!
  const startLine = whichLine(getOnLine); // startLine is a line array
  const endLine = whichLine(getOffLine); // endLine is a line array

  const startStopInd = startLine.indexOf(startStop);
  const unionIndStart = startLine.indexOf('Union Square');
  const unionIndEnd = endLine.indexOf('Union Square');
  const endStopInd = endLine.indexOf(endStop);

  //Situation1: if no need to interchange

  if (getOnLine === getOffLine) {
    if (startStopInd < endStopInd) {
      console.log(`You must travel through the following stops on the ${getOnLine}: ${startLine.slice(startStopInd + 1, endStopInd + 1).join(', ')}.`);
    } else {
      console.log(`You must travel through the following stops on the ${getOnLine}: ${startLine.slice(endStopInd, startStopInd).reverse().join(', ')}.`);
    }
    console.log(`${Math.abs(startStopInd - endStopInd)} stops in total.`);
    return;
  }


  //Situation2: if need to interchange
  let firstHalfWay;
  let secondHalfWay;

  const howManyStops = Math.abs(startStopInd - unionIndStart) + Math.abs(unionIndEnd - endStopInd)

  if (startStopInd < unionIndStart && unionIndEnd < endStopInd) {
    firstHalfWay = startLine.slice(startStopInd + 1, unionIndStart + 1).join(', ');
    secondHalfWay = endLine.slice(unionIndEnd + 1, endStopInd + 1).join(', ');
  } else

  if (startStopInd < unionIndStart && unionIndEnd > endStopInd) {
    firstHalfWay = startLine.slice(startStopInd + 1, unionIndStart + 1).join(', ');
    secondHalfWay = endLine.slice(endStopInd, unionIndEnd).reverse().join(', ');
  } else

  if (startStopInd > unionIndStart && unionIndEnd > endStopInd) {
    firstHalfWay = startLine.slice(unionIndStart, startStopInd).reverse().join(', ');
    secondHalfWay = endLine.slice(endStopInd, unionIndEnd).reverse().join(', ');
  } else

  if (startStopInd > unionIndStart && unionIndEnd < endStopInd) {
    firstHalfWay = startLine.slice(unionIndStart, startStopInd).reverse().join(', ');
    secondHalfWay = endLine.slice(unionIndEnd + 1, endStopInd + 1).join(', ');
  }

  console.log(`You must travel through the following stops on the ${getOnLine}: ${firstHalfWay}.`);
  console.log(`Change at Union Square.`);
  console.log(`Your journey continues through the following stops on the ${getOffLine}: ${secondHalfWay}.`);
  console.log( howManyStops + ' stops in total.');

};


planTrip('lineN','Times Square','lineN','N8th');
planTrip('lineL','1st','line6','Astor Place');
planTrip('line6','Astor Place','lineN','Times Square');
planTrip('lineN','34th','lineL','1st');
planTrip('lineL','8th','line6','Grand Central');
planTrip('line6','Astor Place','line6','28th');
