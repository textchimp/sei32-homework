//REDO

//passengers' inputs are strings, so use object to store lines info.
const lineData = {
  lineN: ['Times Square', '34th', 'N28th', 'N23rd', 'Union Square', 'N8th'],
  lineL: ['8th', '6th', 'Union Square', '3rd', '1st'],
  line6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
};

//design one line pattern first.
const oneLineTrip = function(line, startStation, endStation) {
  const oneLine = lineData[line]; // oneLine is the array value of the object lineData.
  const startIndex = oneLine.indexOf(startStation);
  const endIndex = oneLine.indexOf(endStation);

  if (startIndex < endIndex) {
    return oneLine.slice(startIndex + 1, endIndex + 1);//.join(', '); -> change to return array, so that can calculate stops later in one step.
  } else {
    return oneLine.slice(endIndex, startIndex).reverse();//.join(', ');
  }
};

// main function, design for three lines.
const planTrip = function(getOnLine, startStation, getOffLine, endStation) {
  console.log('######################## Trip Plan ########################');

  //Situation1: if no need to interchange
  if (getOnLine === getOffLine) {
    const route = oneLineTrip(getOnLine, startStation, endStation); // here route is a returned array!!!
    console.log(`You must travel through the following stops on the ${getOnLine}: ${route.join(', ')}`);
    console.log(`${route.length} stops in total.`);
    console.log('###########################################################\n');
    return;
  }

  //Situation2: need to interchange
  const firstHalfRoute = oneLineTrip(getOnLine, startStation, 'Union Square'); //firstHalfRoute is a returned array!!!
  const secondHalfRoute = oneLineTrip(getOffLine, 'Union Square', endStation); //secondHalfRoute is a returned array!!!
  const howManyStops = firstHalfRoute.length + secondHalfRoute.length;

  console.log(`You must travel through the following stops on the ${getOnLine}: ${firstHalfRoute.join(', ')}.`);
  console.log(`Change at Union Square.`);
  console.log(`Your journey continues through the following stops on the ${getOffLine}: ${secondHalfRoute.join(', ')}.`);
  console.log( howManyStops + ' stops in total.');
  console.log('###########################################################\n');
};




planTrip('line6','Astor Place','line6','28th');
planTrip('lineN','Times Square','lineN','N8th');
planTrip('lineL','1st','line6','Astor Place');
planTrip('line6','Astor Place','lineN','Times Square');
planTrip('lineN','34th','lineL','1st');
planTrip('lineL','8th','line6','Grand Central');
planTrip('lineL','8th','lineL','8th');




//luke's advise
//1, getOnStation instead of getOnStop -- Done!
//2, store data in an object - to leave the first whichLine function -- Done!
//3, return route, can return array, so can use the array to calcuate stops instead of using Math.abs -- Done!
