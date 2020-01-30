import React, { Component } from "react";

class Counter extends Component {
  state = {
    // we use state to define all the elements used in the present component.
    value: this.props.counter.value
  };

  handleIncreament = product => {
    this.setState({ value: this.state.value + 1 });
  };
  render() {
    return (
      <div>
        <span className={this.getBedgeClass()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncreament}
          className="badge badge-secondary btn-sm"
        >
          Increament
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  //react

  getBedgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
    // Dynamically change type of the class based on the value.
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
