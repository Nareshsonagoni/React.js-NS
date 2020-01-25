import React, { Component } from "react";

class Counter extends Component {
  state = {
    // we use state to define all the elements used in the present component.
    count: 0
  };

  handleIncreament = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <React.Fragment>
        <span className={this.getBedgeClass()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncreament}
          className="badge badge-secondary btn-sm"
        >
          Increament
        </button>
      </React.Fragment>
    );
  }
  //react

  getBedgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
    // Dynamically change type of the class based on the value.
  }

  formatCount() {
    const { count } = this.state;
    return count == 0 ? "Zero" : count;
  }
}

export default Counter;
