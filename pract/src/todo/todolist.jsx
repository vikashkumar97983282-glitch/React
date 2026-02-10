import React, { Component } from "react";

class Todolist extends Component {
  state = {
    startIndex: 0,
    itemsPerPage: 5,
  };

  names = [
    "this is 1st",
    "this is 2nd",
    "this is 3rd",
    "this is 4th",
    "this is 5th",
    "this is 6th",
    "this is 7th",
    "this is 8th",
    "thsi is 9th",
    "this is 10th",
    "this is 11th",
    "this is 12th",
    "this is 13th",
    "this is 14th",
    "this is 15th",
    "this is 16th",
    "this is 17th",
    "this is 18th",
    "this is 19th",
    "this is 20th",
    "this is 21th",
    "this is 22th",
  ];

  handleClick = () => {
    this.setState((prevState) => ({
      startIndex: prevState.startIndex + prevState.itemsPerPage,
    }));
  };

  handleClickPrev = () => {
    this.setState((prevState) => ({
      startIndex: Math.max(0, prevState.startIndex - prevState.itemsPerPage),
    }));
  };

  render() {
    const { startIndex, itemsPerPage } = this.state;

    const visibleNames = this.names.slice(
      startIndex,
      startIndex + itemsPerPage,
    );

    const page = Math.floor(startIndex / itemsPerPage) + 1;
    const totalPages = Math.ceil(this.names.length / itemsPerPage);

    return (
      <div>
        <ul>
          {visibleNames.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>

        <div>
          Page {page} / {totalPages}
        </div>

        <button
          onClick={this.handleClickPrev}
          disabled={startIndex <= 0}
        >
          prev
        </button>

        <button
          onClick={this.handleClick}
          disabled={startIndex + itemsPerPage >= this.names.length}
        >
          Next
        </button>
      </div>
    );
  }
}

export default Todolist;
