// object containing train line keys and array of stop values

let trainLines = {
  nLine:['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  sixLine:['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
  lLine:[ '8th', '6th', 'Union Square', '3rd', '1st']

}

//////A function() that counts how many stops in total for each given train line ////////
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




///////////////A function() that counts the stops on a single line route/////////////////////
const singleLineTrip = function( line, startStation, endStation ){

 let stationsInTrip =  trainLines[line].indexOf(endStation) - trainLines[line].indexOf(startStation);


  return stationsInTrip;
};

//print expected output here:
console.log('I expect to see: there should be 4 stops between 34th and 8th')
console.log('-----------------------------------------------------------------------------')
console.log('Trip on line N from 34th to 8th:', singleLineTrip( 'nLine', '34th', '8th' ));
console.log('-----------------------------------------------------------------------------')
console.log('Trip on line L from 8th to Union Square:', singleLineTrip('lLine', '8th', 'Union Square'));
console.log('-----------------------------------------------------------------------------')





//////Function to return specific station index///////////////

const stationIndex = function(line, station) {
  let index =  trainLines[line].indexOf(station);
  return index;


};
console.log('you should to say 0');
console.log(stationIndex('nLine', 'Times Square'));
console.log('you should to say 1');
console.log(stationIndex('sixLine', '33rd'));


/////////////Function to create an array of stops using slice()////////

const createRouteList = function(line, indexI, indexII){
  let routeList = trainLines[line].slice(indexI, indexII);
  return routeList;




};

console.log('you should list 4 index\'s from Times Square to Union Square');
console.log(createRouteList('nLine', stationIndex('nLine','Times Square',), stationIndex('nLine', 'Union Square')));
console.log(  '--------------------list of index\'s------------' );







///////////Final Function to count stops on a multiline trip///////////////////////////////
// const multiLineTrip = function(lineName, startStation, lineName, endStation){
//   let totalRouteStops =
//
//
//
//
// }





//####planTrip('N', 'Times Square', '6', '33rd');#####
