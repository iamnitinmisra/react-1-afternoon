import React, { Component } from "react";

class FilterObject extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      employees: [
        {
          name: "Jimmy Joe",
          title: "Hacker",
          age: 12
        },
        {
          name: "Jeremy Schrader",
          age: 24,
          hairColor: "Brown"
        },
        {
          name: "Carly Armstrong",
          title: "CEO"
        }
      ],

      userInput: "",
      filterEmployees: []
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterEmployees(prop) {
    let employees = this.state.employees;
    let filteredEmployees = [];

    for (let i = 0; i < employees.length; i++) {
      if (employees[i].hasOwnProperty(prop)) {
        filteredEmployees.push(employees[i]);
      }
    }

    this.setState({ filteredEmployees: filteredEmployees })
  }

  render() {
    return (
      <div className="puzzleBox fulterObjectPB">
        <h4> Filter Object </h4>
        <span className="puzzleText">
          Original: {JSON.stringify(this.state.employees, null, 10)}{" "}
        </span>
        <input
          className="inputLine"
          onChange={event => this.handleChange(event.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.filterEmployees(this.state.userInput)}
        >
          {" "}
          Filter{" "}
        </button>
        <span className="resultsBox filterObjectRB">
          {" "}
          Filtered: {JSON.stringify(
            this.state.filteredEmployees,
            null,
            10
          )}{" "}
        </span>
      </div>
    );
  }
}

export default FilterObject;
