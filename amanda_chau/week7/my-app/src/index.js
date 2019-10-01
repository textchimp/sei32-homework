import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



// // ** if a write 'import React {Component} from 'react'' then no need for React.Component?
// class Square extends React.Component {
//
//   //*** what is the constructor method?
//   //*** is it necessary to pass in props?
//   //** are props arguements
//   // constructor method initializes the state, but can it initialize other things??
//   // constructor(props){
//   // //
//   //   super(props);
//   // // to remember things components use STATE.
//   // // this.state is private to a create component but is visible across the object
//   // //i.e. cannot be seen outside the square component
//   //   this.state = {
//   //     value: null,
//   //   };
//   //
//   //   // by binding (this) which refers to the class square
//   //   //this.setState can now be recognized when the this.changeX is called
//   //   this.changeX = this.changeX.bind(this);
//   //   }
//
//   //
//   // changeX() {
//   //   //THIS this is the problem
//   //   // this =  undefined if binding isn't specified
//   //   // when the browser is rendering this.changeX - it extracts this.changeX away
//   //   // away from the square class therefore 'this' is removed from its context
//   //   // and undefined when you try to call changex()
//   //   this.setState({value: 'X'});
//   // }
//
//   render() {
//
//     // this.changeX(); can't do this because we'll get an infinite loop
//     // every time you change the state, it renders and calls back the function
//
//     // onClick is a click event listener/callback
//     // DOM <button> element's OnClick attribute has a special meaning to React because
//     // it's a built-in component
//     // this means when the button is clicked that this.proprs.onClick() runs
//     // which causes this.handleClick(i) to run
//
//
//     return (
//       <button className="square"
//         onClick={ () => this.props.onClick() }
//       >
//         { this.props.value }
//       </button>
//     );
//
//     // return (
//     //   <button className="square"
//     //     onClick={ this.changeX }
//     //   >
//     //     { this.state.value }
//     //   </button>
//     // );
//   }
// }
// // onClick={ this.setState({value: 'X'}) } cannot do this this because it calls the function right away
// // it would be like passing a this.setstate() into a callback function, which means the function would be called right away
//
//
// // pass a prop called value to the square
// // i.e. this.renderSquare(0) mean i = 0 and
// // 0 is being passed on to class Square

// change square to a function component
// this is possible for classes without their own state
// this.props is no longer required
// **** WHY??? also no longer requires parentheses () => this.props.onClick()
function Square(props){
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}


class Board extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     squares: Array(9).fill(null),
  //     xIsNext: true,
  //   };
  // }

  //move handleClick(i) to game

  // now value of the square will depend on squares array.
  // squares array is not currently being updated
  renderSquare(i) {
    // this passes down two props(value and onClick) from board to square
    // onClick prop is a function that Square can call when
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }


  render() {

    // move winner and status to game

    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}



class Game extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        history: [{
          squares: Array(9).fill(null),
        }],
        stepNumber: 0,
        xIsNext: true,
      };
    }

    handleClick(i){
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      // we call .slice() to create a copy of the squares array to modify instead of
      // modifying the existing array
      // const squares = this.state.squares.slice();

      // exit out of handleClick if square is filled (i.e not null) and winner
      if (calculateWinner(squares) || squares[i]){
        return;
      }

      // ex. set squares[1] = X (if xisNext is true)
      squares[i] = this.state.xIsNext? 'X': 'O';
      // ex squares = [null, "X", null, null, null, null, null, null, null]
      // save new squares array in this.state
      //  history is an array of objects and below the updated squares,
      // is also an array of objects
      // concat. is used to merge objects
      this.setState({
        history: history.concat([{
          squares: squares,
        }]),
        // squares: squares,
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
      });
    }

    jumpTo(step){
      this.setState({
        stepNumber: step,
        // all odd moves are X
        xIsNext: (step % 2) === 0
      })
    }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

//***** where is the step and move being passed in?
    const moves = history.map((step, move) => {
      // if move is is NOT present display start game
      // If move is present display go to move #
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      // render button that takes you to the correct step (ordered list)
      return (
      // key is special and reserved property in React
      // key helps React know which components to update
      // key is not a prop
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner){
      status = 'Winner: ' + winner;
    } else {
      status = 'Next Player: ' + (this.state.xIsNext? 'X':'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

// calc winner, need to review
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    // for line[0], saves const as a = 0, b = 1, c = 2
    const [a, b, c] = lines[i];
    // checks to see if square a is the same as square b and square c
    //AND that square[a] is NOT NULL
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] ){
      return squares[a];
    }
  }
  return null;
}

// const obj = {
//    name: 'Amanda',
//    hello: function(){
//      console.log(`Hello, ${this.name}`);
//    }
// };
// //
// obj.hello();
// // > Hello, Amanda
//

// loses context from obj and cannot recognize this.name
// const extractedHello = obj.hello;
// extractedHello()
// // > Hello,
//
// const correctHello = extractedHello.bind( obj );
// correctHello();
// // > Hello, Amanda

// two approaches to changing data
// 1. mutate the data by directly changing the data's value
// 2. replace the data with a new copy which has the desired changes
//  - this enables us to keep previous versions of the game's history intact, and reuse them later
// - easier to detect changes which is required to re-render correctly
// - MAIN benefit to help you build pure components in React
