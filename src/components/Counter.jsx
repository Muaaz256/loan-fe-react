import React, {Component} from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-sm btn-secondary"
        >
          Increment
        </button>
        <button
          className="btn btn-sm m-2 btn-danger"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }
  
  getBadgeClasses() {
    const counter = this.props.counter.value;
    return `badge m-2 badge-${counter === 0 ? 'warning' : 'primary'}`;
  }
  
  formatCount() {
    const counter = this.props.counter.value;
    return counter === 0 ? "Zero" : counter;
  }
}

export default Counter;
