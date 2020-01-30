import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("Props", prevProps);
    console.log("State", prevState);
  }
  render() {
    console.log("counter");
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBedgeClass()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncreament(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecreament(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={!this.props.counter.value}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            x
          </button>
        </div>
      </div>
    );
  }
  //react
  // isActive() {
  //   return this.props.counter.value === 0 ?
  // }

  getBedgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
    // Dynamically change type of the class based on the value.
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
