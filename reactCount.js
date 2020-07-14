import React, { Component } from "react";
import ReactDOM from "react-dom";

class reactCount extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick} color="primary">
          Click me to change the counter!
        </button>
      </div>
    );
  }
}

export default reactCount;
