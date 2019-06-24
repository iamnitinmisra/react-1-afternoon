import React, { Component } from "react";

class EvenAndOdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ""
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  assignEvenAndOdds(userInput) {
    //sort the user input into two array's, one for evens called evenArray and one for odds called oddArray. use set state function
    let arr = userInput.split(",");
    let even = [];
    let odd = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        even.push(arr[i]);
      } else {
        odd.push(arr[i]);
      }
    }
    this.setState({ evenArray: even, oddArray: odd });
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4> Evens and Odds </h4>
        <input
          onChange={event => this.handleChange(event.target.value)}
          className="inputLine"
        />
        <button
          onClick={() => {
            this.assignEvenAndOdds(this.state.userInput);
          }}
          className="confirmationButton"
        >
          {" "}
          Split{" "}
        </button>

        <span className="resultsBox">
          Evens: {JSON.stringify(this.state.evenArray)}{" "}
        </span>
        <span className="resultsBox">
          Odds: {JSON.stringify(this.state.oddArray)}{" "}
        </span>
      </div>
    );
  }
}
export default EvenAndOdd;
