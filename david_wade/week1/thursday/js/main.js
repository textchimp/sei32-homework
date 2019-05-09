// Geometry Function Lab
// Part 1, Rectangle
// Given a rectangle object like the one below, write the following functions:
//
// isSquare(rect) - Returns whether the rectangle is a square or not
// area(rect) - Returns the area of the rectangle
// perimeter(rect) - Returns the perimeter of the rectangle
//
// In other words, these functions should take as their only argument a single object
// with the same keys (length, width) as the rectangle object above, and use that object to make the calculations.



var rectangle = {
  height: 4,
  width: 4
};


if (rectangle.height === rectangle.width) {
  console.log('this is a square');
} else {
  console.log('this is a rectangle');
};
// const isSquare = function(){
//  if (rectangle.height === rectangle.width); {
//   console.log('this is a square');
// } if else (rectangle.height != rectangle.width ); {
//   console.log('this is a rectangle');
// }
// }
//area(rect)
const area = function() {
let areaCalculation = (rectangle.height * rectangle.width);
return areaCalculation;
   console.log(`area is ${areaCalculation}`);
}

// perimeter(rect) - Returns the perimeter of the rectangle
const perimeter = function() {
let sumOfSides = (rectangle.height * 2) + (rectangle.width * 2);
return sumOfSides;
console.log('perimeter equals ', sumOfSides)
}
