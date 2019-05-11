// arrays containing objects

let trainLines = {
  'nLine':['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  'sixLine':['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
  'lLine':[ '8th', '6th', 'Union Square', '3rd', '1st']

}

//////Counts how many stops in total for each given train line ////////
const numberOfStops = function(lineName) {
  let howManyStations = trainLines[lineName].length;
  return howManyStations;
}

console.log(`number of stops in nLine is 6`);
console.log(`actual answer is ${numberOfStops('nLine')}`);
console.log(`number of stops in sixLine is 6`);
console.log(`actual answer is ${numberOfStops('sixLine')}`);
console.log(`number of stops in lLine is 5`);
console.log(`actual answer is ${numberOfStops('lLine')}`);


const singleLineTrip = function( line, startStation, endStation ){

 let stationsInTrip =  trainLines[line].indexOf(endStation) - trainLines[line].indexOf(startStation);


  return stationsInTrip;
};

// print expected output here:
console.log('I expect to see: there should be 4 stops between 34th and 8th')
console.log('-----------------------------------------------------------------------------')
console.log('Trip on line N from 34th to 8th:', singleLineTrip( 'nLine', '34th', '8th' ));
console.log('-----------------------------------------------------------------------------')
console.log('Trip on line L from 8th to Union Square:', singleLineTrip('lLine', '8th', 'Union Square'));
console.log('-----------------------------------------------------------------------------')



// let lLineArrays = trainLines.nline.length[i];
// console.log(`answer should be 5`);
// console.log(`actual answer is ${lLineArrays}`);






// let stationAndLine = trainLines.nLine[0];
// console.log('result should be Times Square via nLine');
// console.log( `actual result is ${stationAndLine} via the N Line`);






/////////Testing length of each array
// let nLineArrays = trainLines.nLine.length
// console.log(`the number of stops on the N Line is ${trainLines.nLine.length}`);
// let sixLineArrays = trainLines.sixLine.length;
// console.log(`the number of stops on the 6 Line is ${trainLines.sixLine.length}`);
// let lLineArrays = trainLines.lLine.length;
// console.log(`the number of stops on the L Line is ${trainLines.lLine.length}`);



//////Lists train stops
// var trainStops = trainLines.nLine;
// console.log('train line is ' + trainStops);
// var trainStops = trainLines.sixLine;
// console.log('train line is ' + trainStops);
// var trainStops = trainLines.lLine;
// console.log('train line is ' + trainStops);



//####planTrip('N', 'Times Square', '6', '33rd');#####
