// Version 1
const primeFactors = num => {
  let factorsArray = []; // our array of prime numbers

  for (let i = 2; i <= num; i++) {
    console.log("before while i =", i);
    console.log("before while num =", num);
    console.log("before while num % i =", num % i);
    while (num % i === 0) {
      console.log("===== Entered while loop =====");
      console.log("i =", i);
      console.log("num =", num);
      console.log("num % i =", num % i);
      factorsArray.push(i);
      console.log(`found factor ${i}, now factorsArray = ${factorsArray}`);
      num = num / i;
      console.log("===== End of while loop =====");
      console.log(`now test ${i} <= ${num}`);
      console.log("-----------------------------");
    }
  }
  return factorsArray;
};

console.log(primeFactors(60));

//Version 2
// const prime = {
//   // range of all the numbers between 2 and num
//   range: [],
//
//   // all the prime numbers within tht range
//   primeRange: [],
//
//   // the prime numbers that are also factors of the input
//   primeFactorRange: [],
//
//   getRange(num) {
//     this.range = [];
//
//     for (let i = 2; i <= num; i++) {
//       this.range.push(i);
//     }
//     return this.range;
//   },
//
//   getPrimeRange(arr) {
//     this.primeRange = [];
//
//     for (let i = 0; i < arr.length; i++) {
//       let isPrime = true;
//
//       let potentialPrime = arr[i];
//
//       for (let j = 2; j < potentialPrime; j++) {
//         if (potentialPrime % j === 0) {
//           isPrime = false;
//         }
//       }
//
//       if (isPrime === true) {
//         this.primeRange.push(potentialPrime);
//       }
//     }
//
//     return this.primeRange;
//   },
//
//   getPrimeFactors(num) {
//     this.primeFactorRange = [];
//
//     let numPrimes = this.getPrimeRange(this.getRange(num));
//
//     console.log("numPrimes", numPrimes);
//
//     for (let i = 0; i < numPrimes.length; i++) {
//       while (num % numPrimes[i] === 0) {
//         this.primeFactorRange.push(numPrimes[i]);
//
//         num /= numPrimes[i];
//       }
//     }
//
//     return this.primeFactorRange;
//   }
// };
//
// console.log(prime.getPrimeFactors(60));
// console.log(prime.getPrimeFactors(45));
