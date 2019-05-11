// arrays containing objects

let trainLines = {
  nLine:['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  sixLine:['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
  lLine:[ '8th', '6th', 'Union Square', '3rd', '1st']


}

let numberOfStops = function(line) {
return this.nLine.length;
}

numberOfStops(nLine)
console.log('number of stops in nLine is 5');
console.log(`actual answer is ` )



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
