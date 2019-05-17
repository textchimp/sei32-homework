// Create a program that Badger can use for this task - ideally, you should create an object (revengeOfBadger) to do all this (data and functions), but if you can get it working using standalone functions, that's cool.
//
// Your program should:
//
// Track how many times each student in the class has clapped this week (just make up the numbers);
// Include a collection of candidates for the Friday draw (ie, a list of names of people who have clapped Badger more than twice that week);
// Pick a random student to deliver the solution to Friday's warmup.
// If no one has clapped enough that week, the program should indicate that Badger has to do his own damned warmup.

// const students = [
//   {name: 'Clara', claps: 3},
//   // ['Amanda', 1]
// ];
//
// students[0][1] // this is Clara's clap count
// students[0].claps

const revengeOfBadger = {

  students: {
    Clara: 3,
    Amanda: 1,
    Josh: 1,
    Dave: 2,
    Viola: 0
    // Clara: 3,
    // Amanda: 1,
    // Josh: 4,
    // Dave: 2,
    // Viola: 6
  },

  shortlist: [],  // initialise the shortlist array to be empty

  generateShortlist: function(){
    // Loop through the students, and build a new list of students which includes
    // only those students whose clap value is greater than two

    for( const key in this.students ){
      const numClaps = this.students[key];
      if( numClaps > 2 ){
        this.shortlist.push( key ); // add the student name to the shortlist
      }
    } // for

    // console.log( this.shortlist );

  }, // generateShortlist(),s

  // This is the only method we call from outside the object, it kicks off the
  // whole process of generating a shortlist, picking a random student, and
  // returning that student
  drawLoser: function(){

    this.shortlist = [];  // reset the shortlist
    this.generateShortlist();

    if( this.shortlist.length > 0 ){
      // Pick a random student from the shortlist
      const randomIndex = Math.floor( Math.random() * this.shortlist.length );
      return this.shortlist[randomIndex];
    } else {
      // The shortlist is empty, meaning no students clapped more than twice
      // ... so Badger has to do his own warmup
      return 'Badger';s
    }

  } // drawLoser(),

} // end of revengeOfBadger object;

const loser = revengeOfBadger.drawLoser();
console.log(`The winner/loser is: ${ loser }`);
