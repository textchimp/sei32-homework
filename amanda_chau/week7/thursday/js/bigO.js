// Big-O Notation Exercises
// What is the worst-case time complexity for the following algorithms?


// I think #2 is the worst

//
//
// #1
// one loop, linear 0(N)
function wordOccurrence(word, phrase){
  let result = 0
  const array  = phrase.split(' ')
  for(let i = 0; i < array.length; i++){
    if(word.toLowerCase() === array[i].toLowerCase()){
      result++;
    }
  }
  return result
}


//
// #2
// two loops quadratic O(N^2) NESTED!!!
function bubble_sort(list){
  for(let i = 0; i < list.length - 1; i++){
    for(let j  = 0; j < list.length - 2; j++){
      if(list[j+1] < list[j]){
        const temp = list[j];
        list[j] = list[j+1];
        list[j+1] = temp;
      }
    }
  }
  return list;
}
// #3 recursion
// order N
function factorial(n){
  if(n === 0){
    return 1;
  }else{
    return n * factorial(n-1);
    //function is calling itself
    // it loops over itself
  }
}

//#4
//constant, O(1)
function bobIsFirst(people){
  return people[0] == 'bob'
}

// #5
//0(N), 2 loops but not nested
function isPalindrome(input){
  const stack = [];
  let output = "";
  for(let i = 0; i < input.length; i++){
    stack.push(input[i]);
  }
  while(stack.length){
    output += stack.pop();
  }
  return output == input
}

// #6
// linear o(N), 1 loop
function sumOfDivisors(n){
  let result = 0;
  let i = 1;
  while(i < n){
    if( n % i == 0){
      result += i;
    }
  }
  return result
}

//#7
//
// linear O(N) - 2 loops but not nested
function printAllNumbersThenSumPairs(numArray){
  numArray.forEach((num)=>{
    console.log(num);
  });
  numArray.forEach((num, index)=>{
    if(index < numArray.length - 1){
      console.log(num + numArray[index+1])
    }
  });
}

//#8
// single loop
// linear 0(N)
function isPrime(num){
  if(num == 1 || num == 2){
    return false
  }
  for(let i = 2; i < num - 1; i++){
    if(num % i == 0){
      return false
    }
  }
  return true
}
