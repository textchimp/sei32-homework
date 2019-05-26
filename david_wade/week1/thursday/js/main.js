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

// isSquare(rect) - Returns whether the rectangle is a square or no////////////////////////////////////////////////////////////////////////////////////////////t

var rectangle = {
  height: 5,
  width: 4
};


if (rectangle.height === rectangle.width) {
  console.log('this is a square');
} else {
  console.log('this is a rectangle');
};




// area(rect) - Returns the area of the rectangle////////////////////////////////////////////////////////////////////////////////////////////


const area = function() {
let areaCalculation = (rectangle.height * rectangle.width);
return areaCalculation;
   console.log(`area is ${areaCalculation}`);
}

// perimeter(rect) - Returns the perimeter of the rectangle //////////////////////////////////////////////////////////////////////////////////////

const perimeter = function() {
let sumOfSides = (rectangle.height * 2) + (rectangle.width * 2);
return sumOfSides;
console.log('perimeter equals ', sumOfSides)
}




////////////////////////// isEquilateral(tri) - Returns whether the triangle is equilateral or not////////////////////////////////////////////////////////////////////////////////////////
///////////// isEquilateral(tri) - Returns whether the triangle is equilateral or not////////////////////////////////////////////////////////////////////

let triangle = {
  sideA: 8,
  sideB: 8,
  sideC: 8
}


let isEquilateral = function(tri){
if (tri.sideA === tri.sideB && tri.sideB === tri.sideC && tri.sideA === tri.sideC) {
  return true;

} else {
  return false;

}
};


console.log(`is triangle equilateral?' ${isEquilateral(triangle)}`);







///////////////// isIsosceles(tri) - Returns whether the triangle is isosceles or not////////////////////////////////////////////////////////////////////////


const isIsosceles = function(tri){
  if( (tri.sideA + tri.sideB) % tri.sideC || (tri.sideB + tri.sideC) % tri.sideC || (tri.sideC + tri.sideA) % tri.sideB){
  return true;
  } else {
    return false;
  }
};

console.log(`is this triangle isosceles? ${isIsosceles(triangle)}`);




////// area(tri) - Returns the area of the Triangle////////////////////////////////////////////////////////////////////////////////////////////////////////////


const triangleSideSum = function(tri) {
  let sumOfTriangleSides = tri.sideA + tri.sideB + tri.sideC;
  return sumOfTriangleSides;

}
console.log(`perimeter equals ${triangleSideSum(triangle)}`);



const triangleArea = function(tri){

  const s = triangleSideSum(tri) / 2;

  let squareRoot = Math.sqrt( s * ( s - tri.sideA ) * (s - tri.sideB) * (s - tri.sideC) );
  return squareRoot;
}
console.log(triangleArea(triangle));











// // isObtuse(tri) - Returns whether the triangle is obtuse or not
// As above, these functions should take a single object as an argument, which will have the same keys
// as the triangle above, and which you will use for your calcuations.


//
// The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
//
// // Input
// const cartForParty = {
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };
//
// // Output
// cashRegister(cartForParty)); // 60.55



// const cartForParty = {
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };


// const cashRegister = function () {
//   for ( let key in cartForParty ) {
//   console.log(`${cashRegister()}`);
// }
// };//end of cashRegister()


const cakeMix = {
  flour: 2.0,
  eggs: 3.20,
  milk: 1.25,
  sugar: 3.65,
  chocolate: 5.5
}; //end of object
//////////////////////////////// ask luke about this
// const cakeMix = {
//   flour: '2.0',
//   eggs: '3.20',
//   milk: '1.25',
//   sugar: '3.65',
//   chocolate: '5.5'
// }; //end of object

// const cashRegister = function () {
// for ( let key in cakeMix ) {
// console.log(`${key} ${cakeMix[key]}`);
// };//end of for key loop
// };//end of cashRegister()

    // const totalCost = Object.values(cakeMix);
    // // const convertToInteger = totalCost.reduce()

const cashRegister = function(obj) {
  let total = 0;
  for ( let key in obj )
  total += obj[key];
  return total;


};//end of cashRegister()

console.log(cashRegister(cakeMix));
