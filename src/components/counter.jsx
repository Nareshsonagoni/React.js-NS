import React, { Component } from "react";

class Counter extends Component {
  state = {
    // we use state to define all the elements used in the present component.
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };
  render() {
    return (
      <React.Fragment>
        <span className={this.getBedgeClass()}>{this.formatCount()}</span>
        <button className="badge badge-secondary btn-sm">Increament</button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

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
