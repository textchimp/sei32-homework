//REDO
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

// let's say the pass-in 'line' here is a string
const oneLineTrip = function (line, startStop, endStop) {
  const oneLine = whichLine(line); // now returns an array of the one line
  const startIndex = oneLine.indexOf(startStop);
  const endIndex = oneLine.indexOf(endStop);

  if (startIndex < endIndex) {
    return oneLine.slice(startIndex + 1, endIndex + 1).join(', ');
  } else {
    return oneLine.slice(endIndex, startIndex).reverse().join(', ');
  }
};


// main function
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
    const route = oneLineTrip(getOnLine, startStop, endStop);
    console.log(`You must travel through the following stops on the ${getOnLine}: ${route}`);
    console.log(`${Math.abs(startStopInd - endStopInd)} stops in total.`);
    return;
  }

  //Situation2: need to interchange
  const howManyStops = Math.abs(startStopInd - unionIndStart) + Math.abs(unionIndEnd - endStopInd)

  const firstHalfWayRoute = oneLineTrip(getOnLine, startStop, 'Union Square');
  const secondHalfWayRoute = oneLineTrip(getOffLine, 'Union Square', endStop);

  console.log(`You must travel through the following stops on the ${getOnLine}: ${firstHalfWayRoute}.`);
  console.log(`Change at Union Square.`);
  console.log(`Your journey continues through the following stops on the ${getOffLine}: ${secondHalfWayRoute}.`);
  console.log( howManyStops + ' stops in total.');
};




planTrip('line6','Astor Place','line6','28th');
planTrip('lineN','Times Square','lineN','N8th');
planTrip('lineL','1st','line6','Astor Place');
planTrip('line6','Astor Place','lineN','Times Square');
planTrip('lineN','34th','lineL','1st');
planTrip('lineL','8th','line6','Grand Central');




//luke's advise
//1, getOnStation instead of getOnStop
//2, store data in an object - to leave the first whichLine function
//3, return route, can return array, so can use the array to calcuate stops
