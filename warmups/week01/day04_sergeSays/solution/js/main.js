// Serge answers 'Sure.' if you ask him a question.
// He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
// He says 'Fine. Be that way!' if you address him without actually saying anything.
// He answers 'Whatever.' to anything else.
// Create a function that takes an input and returns Serge's response.


// This version of the function uses a local variable to store the result,
// and returns it at the end of the function.
// const sergeSays = function( input ){
//
//   let response = '';
//
//   // if( input[ input.length - 1] === '?' ){
//
//   if( input.endsWith('?') ){
//     response = 'Sure.'
//   } else if( input.length === 0 ){
//     response = 'Fine, be that way. C\'est la vie.';
//   } else if( input === input.toUpperCase() ){
//     response = 'Whoa, chill out mon frére.'
//   } else {
//     response = 'Whatever.';
//   }
//
//   return response;
// };


// This version of the function just returns a response string as soon
// as it can; no local variable required.
const sergeSays = function( input ){

  if( input.endsWith('?') ){
    return 'Sure.'
  } else if( input.length === 0 ){
    return 'Fine, be that way. C\'est la vie.';
  } else if( input === input.toUpperCase() ){
    return 'Whoa, chill out mon frére.'
  } else {
    return 'Whatever.';
  }

};


console.log('Hello. :', sergeSays('Hello.'));
console.log('How are you? :', sergeSays('How are you?'));
console.log('WHATS YOUR DEAL SERGE :', sergeSays('WHATS YOUR DEAL SERGE'));
console.log('(empty string) :', sergeSays(''));
