import React, { Component } from "react";

class FilterString extends Component {
  constructor(props) {
    super(props);

    this.state = {
      unfilteredArray: [
        "James",
        "Jessica",
        "Melody",
        "Tyler",
        "Blake",
        "Jennifer",
        "Mark",
        "Maddy"
      ],
      userInput: "",
      filteredArray: []
    };
  }
  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterNames(userInput) {
    let names = this.state.unfilteredArray;
    let filteredNames = [];

    for (let i = 0; i < names.length; i++) {
      if (names[i].includes(userInput)) {
        filteredNames.push(names[i]);
      }
    }

    this.setState({ filteredNames: filteredNames });
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String </h4>
        <span className="puzzleText">
          Names: { JSON.stringify(this.state.unfilteredArray, null, 10) } {" "}
        </span>
        <input
          onChange={event => this.handleChange(event.target.value)}
          className="inputLine"
        />
        <button
          onClick={() => this.filterNames(this.state.userInput)}
          className="confirmationButton"
        >
          Filter
        </button>
        <span className="resultsBox filterStringRB">
          {" "}
          Filtered Names: { JSON.stringify(this.state.filteredNames, null, 10) } {" "}
        </span>
      </div>
    );
  }
}

export default FilterString;
